import Root from "@/views/root";
import { authRoutes } from "@/features";
import Dashboard from "@/features/dashboard";
import CreateRecipe from "@/features/create-recipe";
import PatientsHome from "@/features/patients";
import RecipeHistory from "@/features/recipe-history";
import RecipeVersion from "@/features/recipe-version";
import NoPermission from "@/components/NoPermission/NoPermission";
import Doctors from "@/features/doctors";
import ERecipes from "@/features/recipes";
import Polyclinic from "@/features/polylinic";
import RecipeRecommendation from "@/features/recipe-recommendation";
import IssueHistory from "@/features/issue-history";

const routes = [
  {
    id: "root",
    path: "/",
    element: <Root />,
    loader: async () => null,
    errorElement: <div>Error element</div>,
    children: [
      {
        id: "dashboard",
        path: "dashboard",
        element: <Dashboard />,
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
      {
        id: "create-recipe",
        path: "create-recipe",
        element: <CreateRecipe />,
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
      {
        id: "doctors",
        path: "doctors",
        element: <Doctors />,
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
      {
        id: "erecipes",
        path: "erecipes",
        element: <ERecipes />,
        loader: async () => null,
        errorElement: <div>Error element</div>,
        children: [
          {
            id: "erecipes-recipe-version",
            path: "recipe-version/:id",
            element: <RecipeVersion />,
            loader: async () => null,
            errorElement: <div>Error element</div>,
          },
          {
            id: "recipe-recommendation",
            path: "recipe-recommendation/:id",
            element: <RecipeRecommendation />,
          },
        ],
      },
      {
        id: "patients",
        path: "patients",
        element: <PatientsHome />,
        loader: async () => null,
        errorElement: <div>Error element</div>,
        children: [
          {
            id: "recipe-history",
            path: ":id",
            element: <RecipeHistory />,
            loader: async () => null,
            errorElement: <div>Error element</div>,
          },
          {
            id: "patients-recipe-version",
            path: "recipe-version/:id",
            element: <RecipeVersion />,
            loader: async () => null,
            errorElement: <div>Error element</div>,
          },
          {
            id: "recipe-edit",
            path: "recipe-edit",
            element: <CreateRecipe />,
            loader: async () => null,
            errorElement: <div>Error element</div>,
          },
        ],
      },
      {
        id: "clinic",
        path: "clinics",
        element: <Polyclinic />,
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
      {
        id: "issues-history",
        path: "issues-history",
        element: <IssueHistory />,
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
      {
        id: "local-not-found",
        path: "*",
        element: (
          <NoPermission
            title="У вас нет доступа к созданию рецепта"
            text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
          />
        ),
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
    ],
  },
  authRoutes,
  {
    id: "global-not-found",
    path: "*",
    element: <h1>404: Page not found</h1>,
  },
];

export default routes;
