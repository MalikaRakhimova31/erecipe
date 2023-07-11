import SeparatedTable from "@/components/SeparatedTable/SeparatedTable";
import { pharmacyBody, pharmacyHeader, userData, header } from "./mock";

export default function RecipesTable(): React.ReactElement {
  const role = import.meta.env.VITE_ROLE;

  return (
    <SeparatedTable
      headData={role === "PHARMACY" ? pharmacyHeader : header}
      bodyData={role === "PHARMACY" ? pharmacyBody : userData}
      hasPath={
        import.meta.env.VITE_ROLE === "MINZDRAV" ||
        import.meta.env.VITE_ROLE === "MAIN_DOCTOR"
      }
      path="erecipes/recipe-version"
    />
  );
}
