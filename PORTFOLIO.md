# NAVI — Portfolio Entry

**Type:** Product Design · AI Financial Wellness · Enterprise B2B  
**Role:** Solo product designer  
**Status:** Shipped enterprise workplace benefit under NDA

---

## One-line pitch

NAVI is a shipped AI financial wellness benefit for employees at an anonymized mid-sized technology company. It is not a separate app; it is an embedded agent that surfaces inside Slack and HR tools where people already spend their time. The public repository contains the verified front-end prototype, design system, and platform specifications. Production services and credentials remain private under NDA.

---

## The hook

The discovery included 19 structured interviews: 7 HR leaders and 12 employees across two mid-sized technology companies. The team needed a benefit that could reach employees without asking them to find another finance app.

The gap isn't the benefit — it's the surface. People don't open new apps. NAVI meets them inside Slack.

---

## What I designed

8-screen web prototype plus a 4-screen mobile prototype covering:

- **Onboarding** — payroll connect, goal setting, AI analysis walkthrough
- **Dashboard** — proactive AI toast, payroll visualization, spending breakdown, recent transactions
- **Weekly Check-in** — structured AI briefing with accept/override controls
- **My Goals** — progress tracking with a personalized action plan
- **AI Analysis** — conversational query interface with explainability panel
- **Slack Embedded View** — realistic Block Kit simulation with the production platform constraints annotated
- **Alerts** — anomaly detection with resolution options and goal impact calculation
- **Privacy & Data** — full data control panel with toggles, source visibility, and redaction

---

## Design highlights

**Claymorphism** — soft sky-blue clay surfaces that communicate approachability before the user reads a word. Financial stress is an emotional problem; the visual language addresses it before the content does.

**"NAVI ANALYSIS" pattern** — all AI outputs use a structured card format with confidence %, data source citation, and a mandatory override button. Feels like a workplace system, not a chatbot.

**Transparency architecture** — every screen surfaces what data NAVI accessed and what it did not. The employer view is aggregate-only and requires `k ≥ 5`; individual balances, debts, merchants, and goals never appear in HR reporting.

**13-month plan** — behavioral UX bet, not a validated finding: NAVI recommends 13-month savings plans rather than 12-month on the hypothesis that a clean calendar year reads like a New Year's resolution. Untested claim; what's actually observed is that people notice the odd number.

**Embedded-first constraint** — Slack's Block Kit format (3 buttons max, no charts, text-first) was used as a design pressure valve. Every feature that couldn't survive the embedded constraint was cut or simplified.

---

## Stack

- Static HTML + custom runtime front-end prototype (`support.js` generated from the `dc-runtime` source tree)
- Nunito (display) + DM Mono (financial data)
- Claymorphism shadow system (multi-layer box-shadow)
- No frameworks, no dependencies beyond the canvas runtime

---

## Metrics from usability study

| Metric | Result |
|--------|--------|
| Time to act on recommendation | 38 sec (vs. 4.2 min baseline) |
| Trust score | 4.4 / 5 |
| Would use as workplace benefit | 7 of 8 participants |

The usability study included 8 participants and simulated onboarding plus two recommendation flows. The 4.2-minute figure is the industry app baseline used for comparison; the 38-second figure is the NAVI study result.

---

## Interview talking points

- Why claymorphism? Anxiety reduction through tactile form — the aesthetic does emotional work before the content loads.
- Why NAVI ANALYSIS, not chat bubbles? Enterprise systems need to feel like systems. Chat bubbles signal toy; structured cards signal authority.
- Why override on every card? Financial anxiety peaks when control is removed. The override button is a design promise: the human is always in charge.
- Why 13 months? A design hypothesis, not research I've validated: a clean 12 reads like a resolution. If pushed on evidence, the honest answer is "untested bet, based on the odd number getting noticed in testing."
- Why Slack-first? The discovery: people don't open finance apps. They open Slack. Meeting users where attention already lives is the product strategy.
