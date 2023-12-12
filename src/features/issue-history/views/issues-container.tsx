import useMatchEither from "@/hooks/useMatchEither";
import { Outlet } from "react-router-dom";

interface Props {
  of: React.ReactElement;
}

export default function OrdersContainer(props: Props): React.ReactElement {
  const { of } = props;

  const match = useMatchEither(["/issues-history/:id"]);

  if (match) {
    return <Outlet />;
  }

  return of;
}
