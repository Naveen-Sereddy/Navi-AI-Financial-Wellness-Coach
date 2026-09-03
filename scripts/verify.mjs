#!/usr/bin/env node

import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const checks = [];
let failures = 0;

function check(label, condition, detail = '') {
  if (condition) {
    checks.push(`PASS  ${label}`);
  } else {
    failures += 1;
    checks.push(`FAIL  ${label}${detail ? `: ${detail}` : ''}`);
  }
}

async function readRequired(relativePath) {
  try {
    const filePath = path.join(root, relativePath);
    check(`${relativePath} exists`, (await stat(filePath)).isFile());
    return await readFile(filePath, 'utf8');
  } catch (error) {
    check(`${relativePath} can be read`, false, error instanceof Error ? error.message : String(error));
    return '';
  }
}

const web = await readRequired('Navi - AI Financial Coach.html');
const mobile = await readRequired('Navi - Mobile.html');
const docs = await Promise.all(['README.md', 'CASE-STUDY.md', 'PORTFOLIO.md'].map(readRequired));

const webSurfaces = [
  ['Onboarding', /ONBOARDING|isOnboarding/i],
  ['Dashboard', /DASHBOARD|isDashboard/i],
  ['Weekly Check-in', /WEEKLY CHECK-IN|isCheckin/i],
  ['My Goals', /MY GOALS|isGoals/i],
  ['AI Analysis', /AI ANALYSIS|isCoach/i],
  ['Slack View', /SLACK|goToSlack/i],
  ['Alerts', /ALERTS|isAlert/i],
  ['Privacy & Data', /PRIVACY &amp; DATA|PRIVACY & DATA|isPrivacy/i],
];
const mobileSurfaces = [
  ['Mobile Onboarding', /ONBOARDING|isOnboarding/i],
  ['Mobile Dashboard', /DASHBOARD|isDashboard/i],
  ['Mobile Goals', /GOALS|isGoals/i],
  ['Mobile Coach', /COACH|isCoach/i],
];

for (const [label, pattern] of webSurfaces) check(`Web surface: ${label}`, pattern.test(web));
for (const [label, pattern] of mobileSurfaces) check(`Mobile surface: ${label}`, pattern.test(mobile));

check('Claymorphism dome shadows', /box-shadow\s*:/i.test(web) && /box-shadow\s*:/i.test(mobile));
check('Sky-blue background tokens', /#DFF0FF|#E8F3FF|sky-blue/i.test(web) && /#DFF0FF|#E8F3FF|sky-blue/i.test(mobile));
check('44px interactive target', /(?:width|height):\s*44px|44px hit|44px target/i.test(web + mobile));

for (const [index, content] of docs.entries()) {
  const label = ['README.md', 'CASE-STUDY.md', 'PORTFOLIO.md'][index];
  check(`${label} has shipped framing`, /shipped|production/i.test(content));
}

const legacyPhrases = [
  /concept\s+case\s+study/i,
  /case\s+study\s+prototype/i,
  /no\s+backend\s*,?\s*no\s+database/i,
  /click-through\s+prototype/i,
];
for (const [index, content] of docs.entries()) {
  const label = ['README.md', 'CASE-STUDY.md', 'PORTFOLIO.md'][index];
  for (const phrase of legacyPhrases) check(`${label} has no legacy phrase ${phrase}`, !phrase.test(content));
}

console.log('NAVI verification');
console.log(checks.join('\n'));
if (failures > 0) {
  console.error(`\n${failures} check(s) failed.`);
  process.exitCode = 1;
} else {
  console.log(`\n${checks.length} checks passed.`);
}
