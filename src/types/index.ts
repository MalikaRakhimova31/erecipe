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
  onChange?: () => void;
}

interface LabelProps {
  title: string;
  children: React.ReactNode;
  optional?: boolean;
  id?: string;
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
    | "blackButton";
  buttonType: "submit" | "button";
  padding?: string;
  isFull?: boolean;
  height?: string;
}

interface PopupInstanceProps {
  open: boolean;
  onClose: () => void;
}

interface itemProps {
  recipeType: string;
  mnn: string;
  drugForm: string;
  drugFormDetails: string;
  drugMethod: string;
  startDate: Date;
  endDate: Date;
  drugQuantity: number;
  measure: string;
  frequencyMethod: string;
  frequency: number;
  drugDuartion: string;
  period: number;
  note?: string;
  id?: string;
}

interface TextAreaProps {
  title: string;
  control: any;
  name: string;
  placeholder: string;
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
};
