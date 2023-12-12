import type { BaseParams, ListResponse, SelectionMenuProps } from "@/types";

interface PhoneTypes {
  id: number;
  value: string;
}

interface DoctorTypes {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  practitioner_role: {
    id: number;
    name: {
      uz: string;
      ru: string;
      uzc: string;
    };
  };
  phones: PhoneTypes[];
  organization: {
    id: number;

    parent: number;
    name: {
      ru: string;
      uz: string;
      uzc: string;
    };
  };
  recipes_items_count: number;
  done_recipe_count: number;
}

interface DoctorParam extends BaseParams {
  practitioner_role?: string;
  search?: string;
  organization?: string;
  region?: string;
}

interface RoleParams extends BaseParams {
  search?: string;
}

interface RoleTypes {
  id: number;
  code: number;
  name: {
    ru: string;
    uz: string;
    uzc: string;
  };
}

interface MinistryDoctorTBTypes {
  name: React.ReactElement;
  organization?: string;
  specialization: string;
  phone: React.ReactElement;
  given_recipes?: string | number;
}

interface FormValues {
  area: SelectionMenuProps;
  city: SelectionMenuProps;
  region: SelectionMenuProps;
  polyclinic: SelectionMenuProps[];
  specialization: SelectionMenuProps[];
}

interface DoctorState {
  doctors: ListResponse<DoctorTypes[]> | undefined;
  doctorsLoading: boolean;
  ministryDoctorsTB: MinistryDoctorTBTypes[] | undefined;
  PAGE_SIZE: number;
  currentPage: number;
  setCurrentPage: (n: number) => void;
  isMinistry: boolean;
  isMainDoctor: boolean;
  filter: boolean;
  setFilter: (f: boolean) => void;
  control: any;
  handleSubmit: any;
  onSubmit: (f: FormValues) => void;
  reset: () => void;
  regionsOption: SelectionMenuProps[] | string | undefined;
  cityOptions: SelectionMenuProps[] | string | undefined;
  valleyOptions: SelectionMenuProps[] | string | undefined;
  polyclinicOptions: SelectionMenuProps[] | string | undefined;
  specializationOptions: SelectionMenuProps[] | string | undefined;
  params: {
    region: string;
    organization: string;
    practitioner_role: string;
  };
  search: string;
  setSearch: (s: string) => void;
}

export type {
  DoctorTypes,
  DoctorParam,
  DoctorState,
  MinistryDoctorTBTypes,
  FormValues,
  RoleParams,
  RoleTypes,
};
