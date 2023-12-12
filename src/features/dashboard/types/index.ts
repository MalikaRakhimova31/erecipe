import { type DoctorTypes } from "@/features/doctors/types";
import type { BaseParams, ListResponse } from "@/types";

interface Patient {
  id: number;
  uid: string;
  firstname: string;
  lastname: string;
  middlename: string;
  nnuzb: string;
  ppn: string;
  tppn: string;
  bct: string;
  gender: "male" | "female";
  birth_date: string;
  last_visited: string;
}
interface PatientsParams extends BaseParams {
  visited?: string;
  organization?: string;
  region?: string;
  practitioner_role?: string;
  search?: string;
  ordering?: string;
}

interface OrganizationsParams extends BaseParams {
  region?: string;
  search?: string;
}

interface RecipeCounts {
  new: number;
  done: number;
  expire: number;
}

interface AdressoArr {
  district: {
    name: {
      uz: string;
      ru: string;
      uzc: string;
    };
  };
  line: string | null;
}

interface Organizations {
  id: number;
  status: boolean;
  parent: 2368;
  name: {
    ru: string;
    uz: string;
    uzc: string;
  };
  addresso: AdressoArr[];
  recipe_counts: RecipeCounts;
}
interface RecipeStatsParams extends BaseParams {
  patient: string;
  practitioner: string;
  status: "new" | "done" | "expired";
  region: string;
  organization: string;
  search: string;
  ordering: string;
}
interface RecipeStatDateParams extends BaseParams {
  patient?: string;
  practitioner?: string;
  status?: "new" | "done" | "expired";
  region?: string;
  organization?: string;
  search?: string;
  ordering?: string;
  date?: "year" | "month" | "week";
}
interface RecipeList {
  id: number;
  patient: Patient;
  practitioner: string;
  uid: string;
  status: "new" | "done" | "expired";
  created_at: string;
  updated_at: string;
}

interface HealthMinistryDashTableProps {
  address: string;
  done: number;
  new: number;
  expired: number;
  organization: React.ReactElement;
  id: number;
}

interface PatientStatsParams extends BaseParams {}
interface PatientStatsTypes {
  total: number;
  current: number;
  gender_data: [
    {
      gender: "female" | "male";
      count: number;
      percent: number;
    },
    {
      gender: "female" | "male";
      count: number;
      percent: number;
    },
  ];
}

interface RecipeData {
  status: "new" | "expired" | "done";
  count: number;
  percent: number;
}

interface RecipeTypes {
  current: number;
  data: RecipeData[];
  total: number;
  total_recipe_items?: number;
}

interface PractitionerCountTypes {
  count: number;
}

interface PatientsIndicatorTBTypes {
  name: React.ReactElement;
  date: string | Date;
  edit: React.ReactElement;
}

interface DoctorTableTypes {
  name: React.ReactElement;
  givenRecipes: string | number;
  appointments: string | number;
}

interface StatsState {
  patientsLoading: boolean;
  patientsData: ListResponse<Patient[]> | undefined;
  healthMinistryTable: boolean;
  healthMinistryDashTableBody: HealthMinistryDashTableProps[] | undefined;
  organizationsLoading: boolean;
  PAGE_SIZE: number;
  currentPage: number;
  setCurrentPage: (s: number) => void;
  oraganizationsData: ListResponse<Organizations[]> | undefined;
  patientsDonutsLabel: string[] | undefined;
  patientsStats: PatientStatsTypes | undefined;
  patientsDoughnut: any;
  patientsDoughnutSeries: any;
  recipeDoughnutSeries: number[] | undefined;
  recipeDoughnut: any;
  recipeStats: RecipeTypes | undefined;
  practitionerCount: ListResponse<PractitionerCountTypes> | undefined;
  isPractitionerCount: boolean;
  patientsIndicatorTB: PatientsIndicatorTBTypes[] | undefined;
  isDoctor: boolean;
  doctors: ListResponse<DoctorTypes[]> | undefined;
  doctorsTB: DoctorTableTypes[] | undefined;
  isMainDoctor: boolean;
  doctorsLoading: boolean;
}

interface IProps {
  s: string;
}

export type {
  StatsState,
  RecipeList,
  IProps,
  Patient,
  PatientsParams,
  Organizations,
  RecipeStatsParams,
  RecipeStatDateParams,
  OrganizationsParams,
  HealthMinistryDashTableProps,
  PatientStatsParams,
  PatientStatsTypes,
  PractitionerCountTypes,
  PatientsIndicatorTBTypes,
};
