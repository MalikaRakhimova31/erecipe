import useMatchEither from "@/hooks/useMatchEither";
import { Outlet } from "react-router-dom";

interface Props {
  of: React.ReactElement;
}

export default function PatientsContainer(props: Props): React.ReactElement {
  const { of } = props;

  const match = useMatchEither([
    "/patients/:id",
    "/patients/recipe-version/:id",
  ]);

  if (match) {
    return <Outlet />;
  }

  return of;
}
