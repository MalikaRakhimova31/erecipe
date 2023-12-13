import type {
  HealthMinistryDashTableProps,
  Organizations,
} from "@/features/dashboard/types";
import type { SelectionMenuProps, ListResponse } from "@/types";

interface PolyclinicState {
  oraganizationsData: ListResponse<Organizations[]> | undefined;
  organizationsLoading: boolean;
  PAGE_SIZE: number;
  currentPage: number;
  setCurrentPage: (n: number) => void;
  healthMinistryDashTableBody: HealthMinistryDashTableProps[] | undefined;
  cityOptions: SelectionMenuProps[] | undefined;
  valleyOptions: SelectionMenuProps[] | undefined;
  regionsOption: SelectionMenuProps[] | undefined;
  onSubmit: any;
  handleSubmit: any;
  control: any;
  reset: any;
  filter: boolean;
  setFilter: (f: boolean) => void;
  params: Array<string | number> | undefined;
  search: string | undefined;
  setSearch: (s: string) => void;
  setParams: (s: Array<number | string>) => void;
}

interface FormValues {
  area: SelectionMenuProps;
  city: SelectionMenuProps;
  region: SelectionMenuProps;
}

export type { PolyclinicState, FormValues };
