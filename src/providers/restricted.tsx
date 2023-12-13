import { groups, type roles } from "@/config/permissions";
import getItem from "@/helpers/get-item";

interface Props {
  to: Array<keyof typeof roles>;
  children: React.ReactElement;
}

export default function Restricted(props: Props): null | React.ReactElement {
  const { to, children } = props;

  const userRole = getItem("role") as keyof typeof groups;

  if (userRole === null) {
    return null;
  }

  if (to.includes(groups[userRole])) {
    return children;
  }

  return null;
}
