#!/usr/bin/env node

import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.PORT ?? 4173);
const mime = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
]);

function safePath(requestUrl) {
  const requestPath = decodeURIComponent(new URL(requestUrl, 'http://localhost').pathname);
  const relative = requestPath === '/' ? 'Navi - AI Financial Coach.html' : requestPath.replace(/^\/+/, '');
  const target = path.resolve(root, relative);
  return target.startsWith(`${root}${path.sep}`) ? target : null;
}

const server = createServer(async (request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { allow: 'GET, HEAD' });
    response.end();
    return;
  }

  try {
    const target = safePath(request.url ?? '/');
    if (!target || !(await stat(target)).isFile()) throw new Error('Not found');
    response.writeHead(200, {
      'cache-control': 'no-cache',
      'content-type': mime.get(path.extname(target).toLowerCase()) ?? 'application/octet-stream',
    });
    if (request.method === 'HEAD') response.end();
    else createReadStream(target).pipe(response);
  } catch {
    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('Not found');
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`NAVI local server: http://127.0.0.1:${port}`);
  console.log('Web: http://127.0.0.1:' + port + '/Navi%20-%20AI%20Financial%20Coach.html');
  console.log('Mobile: http://127.0.0.1:' + port + '/Navi%20-%20Mobile.html');
});

const shutdown = () => server.close(() => process.exit(0));
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
