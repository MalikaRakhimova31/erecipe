import useMatchEither from "@/hooks/useMatchEither";
import { Outlet } from "react-router-dom";

interface Props {
  of: React.ReactElement;
}

export default function RecipeContainer(props: Props): React.ReactElement {
  const { of } = props;

  const match = useMatchEither([
    "/erecipes/recipe-version/:id",
    "/erecipes/recipe-recommendation/:id",
  ]);

  if (match) {
    return <Outlet />;
  }

  return of;
}
