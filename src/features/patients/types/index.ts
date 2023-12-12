import type { BaseParams, ListResponse, SelectionMenuProps } from "@/types";

interface PatientsParams extends BaseParams {
  visited?: string;
  organization?: string;
  region?: string;
  practitioner_role?: string;
  search?: string;
}

interface PatientTypes {
  id: number;
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

interface healthPatientsTBTypes {
  patient: React.ReactElement;
  edit: React.ReactElement;
  id: string;
}
interface mainDoctorPatientsTBTypes {
  patient: React.ReactElement;
  edit: React.ReactElement;
  id: string;
  lastVisit: string;
}

interface PatientState {
  patients: ListResponse<PatientTypes[]> | undefined;
  patientssLoading: boolean;
  currentPage: number;
  setCurrentPage: (c: number) => void;
  isCalendar: boolean;
  search: string;
  setSearch: (s: string) => void;
  healthPatientsTB: healthPatientsTBTypes[] | undefined;
  mainDoctorPatientsTB: mainDoctorPatientsTBTypes[] | boolean | undefined;
  PAGE_SIZE: number;
  regionsOption: SelectionMenuProps[] | string | undefined;
  cityOptions: SelectionMenuProps[] | string | undefined;
  valleyOptions: SelectionMenuProps[] | string | undefined;
  polyclinicOptions: SelectionMenuProps[] | undefined;
  specializationOptions: SelectionMenuProps[] | string | undefined;
  filter: boolean;
  setFilter: (f: boolean) => void;
  control: any;
  handleSubmit: any;
  onSubmit: (f: FormValues) => void;
  reset: any;
  setParams: (s: any) => void;
  isFilter: boolean;
  setFilterDate: (d: any) => void;
  isMainDoctor: boolean;
}
interface FormValues {
  area: SelectionMenuProps;
  city: SelectionMenuProps;
  region: SelectionMenuProps;
  polyclinic: SelectionMenuProps[];
  specialization: SelectionMenuProps[];
}
export type {
  PatientsParams,
  PatientTypes,
  PatientState,
  healthPatientsTBTypes,
  FormValues,
  mainDoctorPatientsTBTypes,
};
