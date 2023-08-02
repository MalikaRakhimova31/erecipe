import { useContext } from "react";
import { type roleArrayProps } from "@/types";
import PermissionContext from "./permission-content";

interface Props {
  to: roleArrayProps;
  children: React.ReactElement;
}

export default function Restricted({
  to,
  children,
}: Props): null | React.ReactElement {
  const { isAllowedTo } = useContext(PermissionContext);

  if (to !== null && isAllowedTo(to)) {
    return <div>{children}</div>;
  }
  return null;
}
