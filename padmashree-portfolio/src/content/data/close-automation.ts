/*
  Month-end close automation (spec section 6.4).
  A GL report that used to be pulled and fixed by hand, now loads itself.

  Illustrative sample figures, not any employer's actual data.
*/

export const closeAutomation = {
  beforeMinutesPerClose: 135,
  afterMinutesPerClose: 25,
  monthsLive: 6,
  versionsToStabilize: 3,
  before: [
    "Pulled from the ERP by hand",
    "Merged cells broke it every month",
    "The answer depended on who ran it",
  ],
  after: [
    "It loads itself from the email",
    "Raw data lands untouched in its own tab",
    "Same output every time; columns found by name not position",
  ],
} as const;
