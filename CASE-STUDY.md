# NAVI — Case Study

**Role:** Product Designer and Frontend Prototyper (solo)
**Duration:** 6-week discovery and design phase, extended to 2–3 months for Slack adaptation and mobile rollout
**Engagement:** Shipped enterprise workplace benefit for an anonymized mid-sized technology company under NDA
**Tools:** Figma, HTML/CSS prototyping, user interviews

The public NAVI repository contains the verified front-end prototype, design system, and platform specifications used to communicate the shipped product. The production backend, internal Slack bot tokens, and employee database remain private under NDA.

---

## The Problem

Financial stress is the most common and least addressed employee wellness issue. Companies spend heavily on health, mental, and fitness benefits — but financial wellness programs see single-digit adoption because the tools feel wrong.

They're built like banking apps: clinical, data-heavy, anxious. People open them once and never return. The stress they're meant to reduce is amplified by the interface itself.

---

## Discovery

I conducted 7 interviews with HR managers and 12 with individual employees across two mid-sized tech companies.

**What HR managers said:**
- "We offer a financial wellness program. Maybe 3% of employees actually use it."
- "It's a separate app they have to download. That's already a barrier."
- "People are embarrassed to admit they need financial help. The app being 'financial wellness' in the name makes it worse."

**What employees said:**
- "I already have Mint and I never open it."
- "I know I should do a budget but it feels like homework."
- "If it just told me when something was wrong, I'd actually pay attention."
- "I live in Slack. If it was there I might actually see it."

**Key finding:** People don't open finance apps. They open Slack, their payroll portal, and HR dashboards. The opportunity was embedding the advisor where attention already lives — not competing for a slot on the home screen.

---

## The Pivot

Original direction: a standalone financial wellness app.

After interviews: an embedded AI agent that surfaces inside tools employees already use daily (Slack, Workday, BambooHR). The shipped benefit is not a separate app; it finds the employee where attention already lives.

This reframe changed everything: the product had to work within severe embedded constraints (Slack's Block Kit format, 3-button max, no charts), which forced precision in what NAVI actually said and when. The agent specification also defines a 1.5× 60-day discretionary-spend anomaly trigger, a goal-impact calculation, and a confidence score based on category consistency and recurring-merchant signals.

---

## Design Decisions

### 1. Claymorphism over flat UI

Most fintech tools default to flat, dark, clinical interfaces. NAVI needed to communicate safety before the user read a single word.

Claymorphism — soft 3D dome shadows, rounded edges, light sky-blue backgrounds — creates a tactile, approachable register. It reads like a friendly object, not a financial terminal. This was the single biggest driver of the "approachable" quality in usability testing.

### 2. "NAVI ANALYSIS" not "NAVI says"

Consumer AI tools use chat bubbles. Enterprise benefits cannot — they feel like toys, not workplace tools. Every AI output is labeled "NAVI ANALYSIS" with a confidence percentage and a data source citation. This pattern communicates system credibility, not personality.

### 3. Human override on every card

Every recommendation has an Override button. NAVI never acts; it proposes and waits. This was non-negotiable — financial anxiety spikes when people feel out of control. Every screen reinforces that the human is in charge.

### 4. 13-month plan, not 12

When NAVI builds a savings plan, it recommends 13 months over the aspirational 12. My hypothesis: a clean 12-month plan reads like a New Year's resolution, and resolutions have a reputation for not sticking. A 13-month plan is slightly counterintuitive, which makes it memorable — and its odd framing signals that the AI is computing an actual timeline, not rounding. This is a design bet, not a validated finding: I haven't run a study on dropout rates, only observed that people do notice the odd number.

### 5. Confidence scores everywhere

Every AI recommendation shows a confidence percentage and the data it was based on. Transparency reduces skepticism and keeps users engaged with the system's reasoning rather than dismissing it. Users in testing spent significantly more time on cards that showed confidence breakdowns.

### 6. Privacy as a first-class surface

The Privacy & Data screen is reachable within 2 taps from anywhere. It shows exactly what NAVI accessed and — critically — what it did NOT access. Negative disclosure ("NAVI cannot see your performance reviews or health claims") was the most trusted copy in testing.

---

## The Product

NAVI has three deployment surfaces:

**Standalone portal** — full-featured, all 8 screens:
- Onboarding (payroll connect, goal setting, AI analysis)
- Dashboard (payroll bar, spending, proactive toast)
- Weekly Check-in (NAVI briefing, accept/override)
- My Goals (progress ring, action plan)
- AI Analysis (system-UI chat, explainability panel)
- Slack Embedded View (Block Kit simulation, constraints annotation)
- Alerts (anomaly detection, resolution options)
- Privacy & Data (toggles, data sources, redaction)

**Slack / Microsoft Teams** — Block Kit cards with max 3 actions, text-first, no visualization. NAVI appears as a DM from a workplace bot.

**Workday / BambooHR** — 320–400px iframe embed specification with SSO passthrough and single-screen flows. The production connector details are private.

---

## Privacy and governance

NAVI is non-custodial. It proposes recommendations and waits for a visible employee decision; it never moves money autonomously. The employer boundary is zero-knowledge at the individual level: HR receives aggregate adoption only when a cohort has `k ≥ 5` employees. Individual balances, debts, merchant names, and goals stay outside the HR view. The product makes this explicit through a “What NAVI cannot see” disclosure.

## Outcomes

Usability study with 8 participants (simulated onboarding + 2 recommendation flows):

- **Avg. time to act on a recommendation:** 38 seconds (vs. 4.2 min benchmark from comparable finance apps)
- **Trust rating:** 4.4/5 average ("I felt like it explained its reasoning")
- **Adoption intent:** 7/8 participants said they would use NAVI if offered as a workplace benefit

---

## Reflection

The hardest constraint was also the most clarifying one: designing for Slack's Block Kit format forced NAVI to say only what mattered. No charts, no dashboards - one sentence, one number, three buttons. Every standalone screen improved once I stress-tested it against the embedded constraint.

The name NAVI came from "navigate" — and the product's job is exactly that: navigating the employee through a moment of financial complexity with minimal friction and maximum clarity.
