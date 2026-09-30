// Synthetic June 2026 scenario shared by the case study and both prototypes.
export const NAVI_DEMO = Object.freeze({
  goalTarget: 10000,
  savedAmount: 1616,
  fundedPct: '16.2%',
  planStartYear: 2026,
  planStartMonth: 3, // April, zero-indexed. June is month 3.
  currentMonth: 3,
  timelineMonths: 14,
  monthlySave: 748,
  currentMonthSaved: 586,
  diningSpend: 487,
  diningAverage: 325,
  recommendationConfidence: 89,
  analysisWindow: '90 days',
  checkingBalance: 1847,
  rent: 1800,
  amexBalance: 1200,
  paycheck: 3250,
  otherBills: 100.49,
});
export const naviMoney = amount => '$' + amount.toLocaleString('en-US', { maximumFractionDigits: 2 });
export const naviGoalDate = months => new Date(Date.UTC(NAVI_DEMO.planStartYear, NAVI_DEMO.planStartMonth + months - 1, 1)).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
export const NAVI_ALERT_PLANS = Object.freeze({
  expense: Object.freeze({ months: 14, saved: 748 }),
  cutback: Object.freeze({ months: 15, saved: 660 }),
  ignore: Object.freeze({ months: 15, saved: 586 }),
});
export const naviDemoValues = () => ({
  checkingDisplay: naviMoney(NAVI_DEMO.checkingBalance),
  rentDisplay: naviMoney(NAVI_DEMO.rent),
  spareDisplay: naviMoney(NAVI_DEMO.checkingBalance - NAVI_DEMO.rent),
  amexDisplay: naviMoney(NAVI_DEMO.amexBalance),
  paycheckDisplay: naviMoney(NAVI_DEMO.paycheck),
  otherBillsDisplay: naviMoney(NAVI_DEMO.otherBills),
  paycheckRemainderDisplay: naviMoney(NAVI_DEMO.paycheck - NAVI_DEMO.otherBills - NAVI_DEMO.amexBalance),
  afterPaycheckDisplay: naviMoney(NAVI_DEMO.checkingBalance - NAVI_DEMO.rent + NAVI_DEMO.paycheck),
  afterPaymentDisplay: naviMoney(NAVI_DEMO.checkingBalance - NAVI_DEMO.rent + NAVI_DEMO.paycheck - NAVI_DEMO.amexBalance - NAVI_DEMO.otherBills),
  baselineGoalDate: naviGoalDate(NAVI_DEMO.timelineMonths),
  delayedGoalDate: naviGoalDate(NAVI_ALERT_PLANS.ignore.months),
  baselineTimelineMonths: NAVI_DEMO.timelineMonths,
  delayedTimelineMonths: NAVI_ALERT_PLANS.ignore.months,
  cutbackTimelineMonths: NAVI_ALERT_PLANS.cutback.months,
  cutbackGoalDate: naviGoalDate(NAVI_ALERT_PLANS.cutback.months),
});
if (typeof window !== 'undefined') window.NAVI_SCENARIO = { NAVI_DEMO, NAVI_ALERT_PLANS, naviMoney, naviGoalDate, naviDemoValues };
