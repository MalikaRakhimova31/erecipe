import type { roles } from "@/config/permissions";
import type {
  IndexRouteObject,
  NonIndexRouteObject,
  RouteObject,
} from "react-router-dom";

interface CustomNonIndexRouteObject extends NonIndexRouteObject {
  children?: Array<RouteObject & { title?: string }>;
}

type CustomRoute = (IndexRouteObject | CustomNonIndexRouteObject) & {
  title?: string;
};

type id = string;

interface patientInstanceProps {
  title: string | undefined;
  value: string | undefined;
}

interface patientInfoProps {
  src: string | undefined;
  name: string | undefined;
  birthdate: string | undefined;
  tableData: patientInstanceProps[];
}

interface InputProps {
  value: string | Date | null;
  onChange: (value: string | Date | null) => void;
}
interface EmptyBoxProps {
  icon: string;
  title: string;
  description: string;
}

interface SidebarMenuProps {
  title: string;
  icon: string;
  path: string;
  activeIcon?: string | "";
  roles?: Array<keyof typeof roles>;
}

interface SelectionMenuProps {
  value: string | number;
  label: string;
}
interface SelectProps {
  control: any;
  name: string;
  options: any;
  title: string;
  placeholder: string;
  isClearable?: boolean;
  isSearchable?: boolean;
  isMulti?: boolean;
  isDisabled?: boolean;
  required?: boolean;
  errors?: boolean;
  menuPlacement?: "auto" | "top" | "bottom";
}
interface USelectProps {
  options: any;
  placeholder?: string;
  isClearable?: boolean;
  isSearchable?: boolean;
  isMulti?: boolean;
  isDisabled?: boolean;
  searchRef?: any;
  searchIcon: boolean;
  defaultValue?: SelectionMenuProps;
  value?: SelectionMenuProps;
  onChange?: (e: SelectionMenuProps) => void;
}

interface LabelProps {
  title: string;
  children: React.ReactNode;
  optional?: boolean;
  id?: string;
  name?: string;
  errors?: boolean;
}

interface ButtonProps {
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  icon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  variant:
    | "ghost"
    | "outline"
    | "solid"
    | "link"
    | "unstyled"
    | "danger"
    | "greenText"
    | "statusButton"
    | "blackButton"
    | "gray";
  buttonType: "submit" | "button";
  padding?: string;
  isFull?: boolean;
  height?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

interface PopupInstanceProps {
  open: boolean;
  onClose: () => void;
}

// interface itemProps {
//   recipeType: string;
//   mnn: string;
//   drugForm: string;
//   drugFormDetails: string;
//   drugMethod: string;
//   startDate: Date;
//   endDate: Date;
//   drugQuantity: number;
//   measure: string;
//   frequencyMethod: string;
//   frequency: number;
//   drugDuartion: string;
//   period: number;
//   note?: string;
//   id?: string;
// }
interface itemProps {
  recipeType?: string;
  mnn: string;
  drugType: string;
  drugTypeDetails: string;
  note?: string;
  id?: string;
}

interface TextAreaProps {
  title: string;
  control: any;
  name: string;
  placeholder: string;
  required?: boolean;
  errors?: boolean;
}

interface StatusProps {
  status:
    | "issuedByDoctor"
    | "issuedByPharmacy"
    | "issued"
    | "declined"
    | "expired"
    | "new";
}

interface IconTitleBoxProps {
  icon: React.ReactElement;
  title: string;
  text?: string | number;
}
type permissionProps = string;

interface TableProps {
  headData: any[];
  bodyData: any;
  path?: string;
  hasPath?: boolean;
  loading: boolean;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactElement;
}
interface MProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MutationType {
  onSuccess: (res: any) => void;
  onError?: (res: any) => void;
}

interface ListResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T;
}

interface BaseParams {
  page?: number;
  page_size?: number;
}

interface RegionsParams extends BaseParams {
  id: string | number;
}

interface RegionTypes {
  id: number;
  name: {
    ru: string;
    uz: string;
    uzc: string;
  };
}

interface RegionChildrenTypes {
  childs: RegionTypes[];
}

export type {
  CustomRoute,
  id,
  SidebarMenuProps,
  LabelProps,
  SelectProps,
  SelectionMenuProps,
  ButtonProps,
  itemProps,
  TextAreaProps,
  USelectProps,
  InputProps,
  EmptyBoxProps,
  StatusProps,
  IconTitleBoxProps,
  permissionProps,
  TableProps,
  ModalProps,
  MProps,
  PopupInstanceProps,
  MutationType,
  patientInfoProps,
  ListResponse,
  BaseParams,
  RegionsParams,
  RegionTypes,
  RegionChildrenTypes,
};
