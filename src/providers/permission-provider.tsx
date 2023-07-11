import { type userRoleProps } from "@/types";
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
  const isAllowedTo = (per: roleArrayProps): any => {
    if (per !== undefined) {
      return per.includes(permission);
    }
    return undefined;
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <PermissionContext.Provider value={{ isAllowedTo }}>
      {children}
    </PermissionContext.Provider>
  );
}
