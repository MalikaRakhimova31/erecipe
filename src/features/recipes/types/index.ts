import type { BaseParams, ListResponse, SelectionMenuProps } from "@/types";

interface RecipeTypes {
  id: number;
  uid: string;
  patient: {
    id: number;
    uid: string;
    firstname: string;
    lastname: string;
    middlename: string;
    nnuzb: string;
    ppn: string;
    tppn: string;
    bct: string;
    gender: "female" | "male";
    birth_date: Date | null;
  };
  practitioner: {
    id: number;
    firstname: string;
    lastname: string;
    middlename: string;
  };
  status:
    | "issuedByDoctor"
    | "issuedByPharmacy"
    | "issued"
    | "declined"
    | "expired"
    | "new";
  created_at: Date;
}

interface RecipeParams extends BaseParams {
  search?: string;
  status: string | null;
  organization?: string;
  region?: string;
}
interface FormValues {
  area: SelectionMenuProps;
  city: SelectionMenuProps;
  region: SelectionMenuProps;
  polyclinic: SelectionMenuProps[];
  status: any;
}

interface ministryTableProps {
  id: number | string;
  created: string;
  expired: string;
  version: string;
  patient: string;
  doctor: string;
  status: React.ReactElement;
}

interface RecipeStats {
  isMinistry: boolean;
  recipes: ListResponse<RecipeTypes[]> | undefined;
  recipeLoading: boolean;
  PAGE_SIZE: number;
  search: string;
  setSearch: (s: string) => void;
  currentPage: number;
  setCurrentPage: (c: number) => void;
  regionsOption: SelectionMenuProps[] | string | undefined;
  cityOptions: SelectionMenuProps[] | string | undefined;
  valleyOptions: SelectionMenuProps[] | string | undefined;
  polyclinicOptions: SelectionMenuProps[] | undefined;
  statusOptions: SelectionMenuProps[] | undefined;
  filter: boolean;
  setFilter: (f: boolean) => void;
  control: any;
  handleSubmit: any;
  onSubmit: (f: FormValues) => void;
  reset: any;
  setParams: (s: any) => void;
  isMainDoctor: boolean;
  ministryTB: ministryTableProps[] | undefined;
  setIsExported: (s: boolean) => void;
  isFetching: boolean;
  isStatusBtn: boolean;
}

export type {
  ministryTableProps,
  RecipeTypes,
  RecipeParams,
  RecipeStats,
  FormValues,
};
