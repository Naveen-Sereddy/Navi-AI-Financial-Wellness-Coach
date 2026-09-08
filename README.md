# NAVI

NAVI is an enterprise workplace-finance product case study for an anonymized mid-sized technology company. It explores proactive financial coaching inside the tools employees already use, including Slack and HR portals, while HR sees only aggregate benefit adoption. The public repository contains a front-end prototype, design system, and platform specifications; production services and credentials are not included.

**Publication boundary:** EXTERNAL BLOCKER — CLIENT/RESEARCH DISCLOSURE PERMISSION REQUIRED. Client identity, participant consent, code ownership, and public licensing are not established by this repository.

**Live case study:** [naveensereddy.com/case-navi](https://naveensereddy.com/case-navi)

## Features

- Onboarding: connect payroll and accounts, set goals, trust-first AI introduction
- Dashboard: paycheck card, spending breakdown, proactive AI insights
- Weekly check-in with accept/override actions on each recommendation
- Goal tracking with a 13-month savings plan
- Full explainability panel: confidence score, data sources, and reasoning behind every recommendation
- Anomaly alerts with three resolution paths
- A Slack Block Kit view of the embedded experience, with the production constraints documented
- A privacy screen showing exactly what NAVI accessed, with redaction controls

Every recommendation ships with a confidence score, the data behind it, and an override button. NAVI never acts on its own.

## Tech stack

Both public front-end prototypes (`Navi - AI Financial Coach.html`, `Navi - Mobile.html`) run on a custom runtime, `support.js`, generated from a TypeScript source tree (`dc-runtime`) and built with Bun. The runtime wraps React under a custom-element system (`<x-app>`, `<x-import>`) rather than a standard bundler setup, confirmed by the generated-file header in `support.js` itself. The private production backend, Slack bot tokens, and employee database are not part of this public repository.

The core discovery and design phase took 6 weeks. Slack Block Kit adaptation and the mobile rollout extended the engagement to 2–3 months.

## Project structure

```
Navi - AI Financial Coach.html   # verified web front-end prototype
Navi - Mobile.html               # verified mobile front-end prototype (390px)
support.js                       # generated runtime (dc-runtime, do not edit directly)
deck-stage.js                   # slide-deck stage component
DESIGN.md                       # design token spec: claymorphism rationale, color, type, spacing
CASE-STUDY.md                   # research, usability results, outcomes, and product boundary
PORTFOLIO.md                   # shorter portfolio-facing summary
specs/                          # Slack manifest and Block Kit payload specifications
docs/                           # agent decision and enterprise privacy specifications
scripts/                        # local verification and dependency-free dev server
```

## Why I built it this way

The research came first: the project records 19 structured interviews, with 7 HR leaders and 12 employees across two mid-sized technology companies. Those findings are reported here as anonymized project evidence; publication permission for the research record remains an external blocker. The same complaint kept coming up. Companies offer financial wellness benefits, but employees rarely return to a separate finance app because it feels like homework: clinical interfaces, banking-terminal aesthetics, and another download to remember.

Claymorphism (soft 3D surfaces, warm sky-blue backgrounds, tactile card shadows) was a deliberate response to that, documented in full in `DESIGN.md`. Most fintech tools default to flat, dark, data-dense interfaces that read like audit software, the wrong register for a product built around financial anxiety.

The harder constraint was Slack's Block Kit: no charts, three buttons max, text only. Every standalone screen got better once I stress-tested it against that embedded format, since it forced the design to say only what actually mattered.

## Usability results

The repository records an 8-participant study using simulated onboarding plus two recommendation flows (full detail in `CASE-STUDY.md`). Publication of the participant results still requires external permission:

- Average time to act on a recommendation: 38 seconds, against a 4.2-minute industry app baseline
- Trust rating: 4.4 / 5
- 7 of 8 participants said they'd use NAVI if their employer offered it

## Illustrative Slack configuration

`specs/slack-manifest.json` is an illustrative configuration, not a deployable production manifest. Its command and interactivity URLs use `example.com` placeholders and must be replaced only with an approved deployment endpoint.

The current repository contains no Slack network integration, so these scopes are not validated as requirements of the prototype:

- `commands` — intended for the illustrative `/navi` slash command
- `chat:write` — intended for bot-authored briefing messages
- `im:history` and `im:read` — intended for reading direct-message context; review whether both are necessary
- `users:read` — intended for resolving employee-facing Slack identity; review whether it is necessary

The manifest should be treated as a future integration proposal until the permissions are reviewed and minimized.

## Getting started

Open `Navi - AI Financial Coach.html` in any modern browser for the web surface, or `Navi - Mobile.html` for the mobile flow. For a local server, run `npm run dev` and open the URLs printed in the terminal. `npm run check` validates both prototypes, core surfaces, design tokens, and legacy-copy guards.

## License

MIT

---

Naveen Sereddy · [naveensereddy.com](https://naveensereddy.com) · [github.com/Naveen-Sereddy](https://github.com/Naveen-Sereddy)
