const doctor = "doctor";
const mainDoctor = "mainDoctor";
const healthMinistry = "healthMinistry";
const pharmacy = "pharmacy";

export const roles = {
  doctor,
  mainDoctor,
  healthMinistry,
  pharmacy,
} as const;

export const groups = {
  head_outpatient: mainDoctor,
  head_inpatient: doctor,
  pharmacy,
  minzdrav: healthMinistry,
} as const;

export const sections = {
  dashboard: "dashboard",
  clinics: "clinics",
  doctors: "doctors",
  patients: "patients",
  erecipes: "erecipes",
  "issues-history": "issues-history",
  "create-recipe": "create-recipe",
} as const;

type Permissions = Record<
  keyof typeof sections,
  // [pagePart: string]: Array<keyof typeof roles>;
  Record<SectionPart, Array<keyof typeof roles>>
>;

const permissions = {
  dashboard: {
    access: [doctor, mainDoctor, healthMinistry],

    "clinics-doctors-count": [mainDoctor, healthMinistry],
    "recent-patients": [doctor],
    "doctors-indicators": [mainDoctor],
    "clinics-indicators": [healthMinistry],
    "stats-by-day": [mainDoctor, healthMinistry],
  },
  clinics: {
    access: [healthMinistry],
  },
  doctors: {
    access: [mainDoctor, healthMinistry],
  },
  patients: {
    access: [doctor, mainDoctor, healthMinistry],
  },
  erecipes: {
    access: [mainDoctor, healthMinistry, pharmacy],
  },
  "issues-history": {
    access: [pharmacy],
  },
  "create-recipe": {
    access: [doctor],
  },
};

export type SectionPart =
  | keyof typeof permissions.dashboard
  | keyof typeof permissions.clinics
  | keyof typeof permissions.doctors
  | keyof typeof permissions.patients
  | keyof typeof permissions.erecipes
  | keyof (typeof permissions)["issues-history"]
  | keyof (typeof permissions)["create-recipe"];

export default permissions as Permissions;
