/*
  Month-end close automation (spec section 6.4).
  A NetSuite GL report that used to be pulled and fixed by hand, now loads itself.
*/

export const closeAutomation = {
  beforeMinutesPerClose: 120,
  afterMinutesPerClose: 30,
  monthsLive: 7,
  versionsToStabilize: 3,
  before: [
    "Pulled from NetSuite by hand",
    "Merged cells broke it every month",
    "The answer depended on who ran it",
  ],
  after: [
    "It loads itself from the email",
    "Raw data lands untouched in its own tab",
    "Same output every time; columns found by name not position",
  ],
} as const;
