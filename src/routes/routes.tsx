import type { CustomRoute } from "@/types";
import { authRoutes, jobRoutes } from "@/features";
import Root from "@/views/root";
import Header from "@/components/Header/Header";
import Dashboard from "@/features/dashboard";
import CreateRecipe from "@/features/create-recipe";

const routes: CustomRoute[] = [
  {
    id: "root",
    title: "MVD",
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
