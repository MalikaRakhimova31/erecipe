import { type userRoleProps } from "@/types";
import { useState } from "react";
import PermissionContext from "./permission-content";

interface Props {
  permission: userRoleProps;
  children: React.ReactElement;
}

type roleArrayProps = string[] | undefined;

export default function PermissionProvider({
  permission,
  children,
}: Props): React.ReactElement {
  const [headerTitle, setHeaderTitle] = useState("");
  const isAllowedTo = (per: roleArrayProps): any => {
    if (per !== undefined) {
      return per.includes(permission);
    }
    return undefined;
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <PermissionContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ isAllowedTo, headerTitle, setHeaderTitle }}
    >
      {children}
    </PermissionContext.Provider>
  );
}
