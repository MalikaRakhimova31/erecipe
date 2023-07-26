import { createContext } from "react";
import { type roleArrayProps } from "@/types";

interface PermissionContextType {
  isAllowedTo: (per: roleArrayProps) => boolean;
  headerTitle: string;
  setHeaderTitle: (s: string) => void;
}

const defaultBehavior: PermissionContextType = {
  isAllowedTo: () => false,
  headerTitle: "",
  setHeaderTitle: () => "",
};

const PermissionContext = createContext<PermissionContextType>(defaultBehavior);

export default PermissionContext;
