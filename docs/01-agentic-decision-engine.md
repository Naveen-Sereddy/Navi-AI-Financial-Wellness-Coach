# NAVI agentic decision engine

NAVI is a non-custodial workplace benefit. Its private production services propose actions, explain the evidence behind each proposal, and wait for an explicit employee decision. The public repository contains the verified front-end prototype and this platform specification; production credentials, data stores, and employer integrations remain private under NDA.

## Trigger and evidence flow

1. A payroll deposit webhook records a new pay event. A scheduled Plaid transaction batch adds normalized, read-only transactions for the employee's connected accounts.
2. The category service calculates a rolling 60-day discretionary-spend baseline. A category becomes eligible for an anomaly review when current spend exceeds 1.5× that baseline. The threshold is a review trigger, not a diagnosis.
3. NAVI joins the overage to the employee's active goal. The goal impact estimate converts the excess dollars into additional months using the goal's remaining balance and planned monthly contribution:

   `additional months = ceil(excess spend / planned monthly contribution)`

   The interface shows the resulting timeline change and the underlying amounts so the employee can check the reasoning.
4. The confidence score is derived from two signals: historical consistency for the category and whether the merchant is recurring. A stable category history and recurring merchant produce a stronger score; sparse or unusual evidence lowers it.
5. The recommendation is written to the employee's private queue. NAVI never moves money, cancels a subscription, or changes a goal without a visible confirmation. Every recommendation has Accept, Override, and Why actions, with the override path available at the same level as the recommendation.

## Platform constraints

The Slack surface is intentionally text-first. Block Kit permits three actions in the NAVI cards, so the compact briefing carries the conclusion, confidence, evidence sources, and a human decision in one message. The standalone portal exposes the same reasoning in more detail.

## Evidence boundary

The public prototype uses representative data to demonstrate the interaction. It does not connect to the private payroll, Plaid, Slack, Workday, or BambooHR services. Those production contracts and credentials are held outside this repository.
