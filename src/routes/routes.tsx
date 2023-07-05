import type { CustomRoute } from "@/types";
import { authRoutes } from "@/features";
import Root from "@/views/root";
import Dashboard from "@/features/dashboard";
import CreateRecipe from "@/features/create-recipe";
import PatientsHome from "@/features/patients";
import RecipeHistory from "@/features/recipe-history";
import RecipeVersion from "@/features/recipe-version";

const routes: CustomRoute[] = [
  {
    id: "root",
    title: "ERecipe",
    element: <Root />,
    loader: async () => null,
    errorElement: <div>Error element</div>,
    children: [
      {
        id: "create-recipe",
        path: "/create-recipe",
        element: <CreateRecipe />,
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
      {
        id: "patients",
        path: "/patients",
        element: <PatientsHome />,
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
      {
        id: "patient-recipe-history",
        path: "/patients/:id",
        element: <RecipeHistory />,
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
      {
        id: "patient-recipe-version",
        path: "/patients/recipe-version/:id",
        element: <RecipeVersion />,
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
      {
        id: "patient-recipe-edit",
        path: "/patients/recipe-edit",
        element: <CreateRecipe />,
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
      {
        id: "dashboard",
        path: "/",
        element: <Dashboard />,
        index: true,
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
    ],
  },

  authRoutes,
  {
    id: "global-not-found",
    title: "Not found",
    path: "*",
    element: <h1>404: Page not found</h1>,
  },
];

export default routes;
