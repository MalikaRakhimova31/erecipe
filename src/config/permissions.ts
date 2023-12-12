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
  polyclinics: "polyclinics",
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
    "patient-indicators": [doctor],
    "clinics-indicators": [healthMinistry],
    "stats-by-day": [mainDoctor, healthMinistry],
    "practitioner-count": [healthMinistry],
  },
  clinics: {
    access: [healthMinistry],
  },
  doctors: {
    access: [mainDoctor, healthMinistry],
    "health-ministry-doctors": [healthMinistry],
    "doctors-table": [mainDoctor],
  },
  patients: {
    access: [doctor, mainDoctor, healthMinistry],
    "filter-calendar": [mainDoctor, doctor],
    "filter-modal": [healthMinistry],
    "ministry-recipe-history-table": [healthMinistry],
    "doctor-recipe-history-table": [doctor, mainDoctor],
    "recipe-version-organization-ministry": [healthMinistry],
    "recipe-version-organization-doctor": [doctor],
    "recipe-version-doctor": [doctor, mainDoctor],
    "edit-recipe-button": [doctor],
    "main-doctor-patient-table": [mainDoctor],
  },
  erecipes: {
    access: [mainDoctor, healthMinistry, pharmacy],
    "ministry-recipe-table": [healthMinistry],
    "main-doctor-recipe-table": [mainDoctor],
    "status-button": [mainDoctor, pharmacy],
    "recipe-version-organization": [healthMinistry],
    "recipe-version-doctor": [doctor, mainDoctor],
    "recipe-version-organization-doctor": [mainDoctor],
  },
  polyclinics: {
    access: [healthMinistry],
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
