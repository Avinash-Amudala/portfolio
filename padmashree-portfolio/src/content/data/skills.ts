/*
  Skills and stack, grouped (spec section 4.7). No five-dot proficiency meters.
  Each skill records where it was used (playbook slugs and role ids), so selecting
  a skill can highlight the playbooks and roles that used it. Proficiency is shown
  through use, not a bar.
*/

export type Skill = {
  name: string;
  /** Playbook slugs that used this skill. */
  playbooks?: string[];
  /** Role ids that used this skill. */
  roles?: string[];
};

export type SkillGroup = {
  id: string;
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "mfg-ops-finance",
    title: "Manufacturing and Operations Finance",
    skills: [
      {
        name: "Hours per unit and unit economics",
        playbooks: ["hours-per-unit", "hours-per-unit-data-quality"],
        roles: ["harbinger"],
      },
      { name: "Standard costing and overhead absorption (ASC 330)", roles: ["harbinger"] },
      {
        name: "CapEx planning and reconciliation",
        playbooks: ["opex-capex-forecast"],
        roles: ["harbinger"],
      },
      { name: "Purchase order lifecycle tracking", roles: ["harbinger"] },
      { name: "Build-cost reporting by program", roles: ["harbinger"] },
      {
        name: "Production ramp finance",
        playbooks: ["hours-per-unit"],
        roles: ["harbinger"],
      },
    ],
  },
  {
    id: "fpa",
    title: "Financial Planning and Analysis",
    skills: [
      {
        name: "Budgeting and forecasting",
        playbooks: ["multi-year-cost-allocation"],
        roles: ["ntt-data", "harbinger"],
      },
      {
        name: "Driver-based modeling",
        playbooks: ["multi-year-cost-allocation"],
        roles: ["ntt-data"],
      },
      { name: "Variance analysis", roles: ["ntt-data", "harbinger"] },
      {
        name: "Month-end close",
        playbooks: ["month-end-close-automation", "financial-close-reporting-automation"],
        roles: ["harbinger", "ntt-data"],
      },
      { name: "Management reporting", roles: ["ntt-data", "harbinger"] },
      {
        name: "Cost allocation",
        playbooks: ["multi-year-cost-allocation"],
        roles: ["ntt-data"],
      },
    ],
  },
  {
    id: "accounting",
    title: "Financial Statements and Accounting",
    skills: [
      { name: "US GAAP", roles: ["harbinger"] },
      {
        name: "ASC 842 lease accounting",
        playbooks: ["opex-capex-forecast"],
        roles: ["harbinger"],
      },
      { name: "ASC 330 inventory and overhead", roles: ["harbinger"] },
      {
        name: "Reconciliations",
        playbooks: ["financial-close-reporting-automation", "hours-per-unit-data-quality"],
        roles: ["ntt-data", "harbinger"],
      },
      { name: "Audit and assurance", roles: ["sri-ramulu-naidu"] },
      { name: "Statutory compliance", roles: ["sri-ramulu-naidu"] },
    ],
  },
  {
    id: "tools",
    title: "Tools and AI",
    skills: [
      {
        name: "Excel (advanced modeling)",
        playbooks: ["hours-per-unit", "opex-capex-forecast"],
        roles: ["harbinger", "ntt-data"],
      },
      {
        name: "Power BI",
        playbooks: ["financial-close-reporting-automation", "powerbi-expense-forecasting"],
        roles: ["ntt-data"],
      },
      {
        name: "NetSuite",
        playbooks: ["month-end-close-automation", "hours-per-unit"],
        roles: ["harbinger"],
      },
      {
        name: "Google Sheets and Apps Script",
        playbooks: ["month-end-close-automation"],
        roles: ["harbinger"],
      },
      {
        name: "Process automation",
        playbooks: ["month-end-close-automation", "financial-close-reporting-automation"],
        roles: ["harbinger", "ntt-data"],
      },
      { name: "ERP to Sheets data pipelines", roles: ["harbinger"] },
    ],
  },
];

/** Flat set of playbook slugs and role ids a given skill name touches. */
export function skillTargets(name: string): { playbooks: string[]; roles: string[] } {
  for (const group of skillGroups) {
    const found = group.skills.find((s) => s.name === name);
    if (found) return { playbooks: found.playbooks ?? [], roles: found.roles ?? [] };
  }
  return { playbooks: [], roles: [] };
}
