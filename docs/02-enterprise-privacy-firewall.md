# NAVI enterprise privacy firewall

NAVI separates the employee's financial experience from the employer's benefits administration. The employer can understand whether the benefit is being used, but cannot inspect an individual's financial life.

## Aggregate-only employer view

The HR dashboard applies a strict k-anonymity gate before rendering any cohort statistic. A cohort must contain `k ≥ 5` employees. Smaller cohorts return no value and are not rendered. This prevents a manager from inferring one person's behavior by filtering a small group.

HR can see aggregate adoption and engagement patterns for eligible cohorts. HR cannot see individual bank balances, debts, transaction amounts, merchant names, category histories, goals, or recommendation details.

## Data isolation

- Employee financial data is held in the employee's private data boundary.
- The employer boundary receives only the minimum aggregate event needed for benefit administration.
- No individual financial record is copied into an HR report or exposed through a Slack administrative surface.
- Production secrets, tokens, account identifiers, and user records remain in private infrastructure under NDA.

## Negative disclosure

The product states the boundary directly instead of asking employees to infer it from a permissions screen. The Privacy & Data surface includes a “What NAVI cannot see” section that names excluded data, including performance reviews, health claims, and employer access to personal financial records. The same boundary appears before account connection and remains reachable from the main navigation.

## Human control

NAVI is non-custodial. It proposes, explains, and waits. Employees can override a recommendation, redact a transaction, export their data, or delete their NAVI history. The employer cannot use NAVI to initiate a transfer or make an employment decision about an individual.
