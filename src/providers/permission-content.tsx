import { createContext } from "react";
import { type roleArrayProps } from "@/types";

interface PermissionContextType {
  isAllowedTo: (per: roleArrayProps) => boolean;
}

const defaultBehavior: PermissionContextType = {
  isAllowedTo: () => false,
};

const PermissionContext = createContext<PermissionContextType>(defaultBehavior);

export default PermissionContext;
