import type {
  IndexRouteObject,
  NonIndexRouteObject,
  RouteObject,
} from "react-router-dom";
import { type Control } from "react-hook-form";

interface CustomNonIndexRouteObject extends NonIndexRouteObject {
  children?: Array<RouteObject & { title?: string }>;
}

type CustomRoute = (IndexRouteObject | CustomNonIndexRouteObject) & {
  title?: string;
};

type id = string;

interface SidebarMenuProps {
  title: string;
  icon: string;
  path: string;
  activeIcon?: string | "";
}

interface SelectionMenuProps {
  value: string;
  label: string;
}
interface SelectProps {
  control: Control;
  name: string;
  options: any;
  title: string;
  placeholder: string;
  isClearable?: boolean;
  isSearchable?: boolean;
  isMulti?: boolean;
  isDisabled?: boolean;
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
  variant: "ghost" | "outline" | "solid" | "link" | "unstyled" | "danger";
  buttonType: "submit" | "button";
  padding?: string;
  isFull?: boolean;
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
};
