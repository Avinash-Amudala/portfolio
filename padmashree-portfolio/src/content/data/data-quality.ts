/*
  Hours per unit, the data-quality fix (spec section 6.2).
  Before the metric could exist, the source payroll data had to be fixed.

  Illustrative sample figures, not any employer's actual data. The method is the
  point: fix the source, tag every row, and write down the tie-break rule.
*/

export type DataQualityFix = {
  /** Short label for the step. */
  label: string;
  /** What the step does. */
  detail: string;
  /** Duplicated employee-days remaining after this step. */
  duplicatesRemaining: number;
  /** Conflicts logged to the exceptions tab after this step. */
  exceptionsLogged: number;
};

export const dataQuality = {
  punchRows: 128000,
  employees: 310,
  monthsOfData: 11,
  duplicatedDays: 1180,
  duplicatedHours: 6720,
  copiesThatDisagreed: 1080,
  conflictsLogged: 2040,
  conflictHours: 9350,
  rootCause:
    "Overlapping payroll exports plus amended punches surviving as separate rows",
  /*
    Stepped narrative for the interactive. Each step drives the duplicate count
    down toward zero and fills the exceptions tab. Numbers interpolate the fix from
    the starting state (1,180 duplicated days) to the final state (0 duplicates,
    2,040 conflicts logged).
  */
  steps: [
    {
      label: "One version of a day",
      detail:
        "A day is replaced whole, never mixed from two files, so overlapping exports stop stacking.",
      duplicatesRemaining: 480,
      exceptionsLogged: 0,
    },
    {
      label: "Source and period tags",
      detail:
        "Every row records its source file, period, and load time, so any duplicate can be traced.",
      duplicatesRemaining: 170,
      exceptionsLogged: 700,
    },
    {
      label: "Written tie-break rule",
      detail:
        "Latest pull wins, because it carries the corrected punch. The rule is written down, not improvised.",
      duplicatesRemaining: 0,
      exceptionsLogged: 2040,
    },
    {
      label: "Retry and log",
      detail:
        "Failed files retry instead of disappearing, and every unresolved conflict lands in an exceptions tab.",
      duplicatesRemaining: 0,
      exceptionsLogged: 2040,
    },
  ] satisfies DataQualityFix[],
} as const;
