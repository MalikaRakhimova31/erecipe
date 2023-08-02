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
  roles?: string[];
}

interface SelectionMenuProps {
  value: string;
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
  placeholder: string;
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
  text: string;
}
type permissionProps = string;

type userRoleProps = "PHARMACY" | "DOCTOR" | "MAIN_DOCTOR" | "MINZDRAV";

interface TableProps {
  headData: any[];
  bodyData: any[];
  path?: string;
  hasPath?: boolean;
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

type roleArrayProps = string[] | undefined;

interface MutationType {
  onSuccess: (res: any) => void;
  onError?: (res: any) => void;
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
  userRoleProps,
  TableProps,
  ModalProps,
  MProps,
  PopupInstanceProps,
  roleArrayProps,
  MutationType,
  patientInfoProps,
};
