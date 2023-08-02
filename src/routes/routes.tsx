// import type { CustomRoute } from "@/types";
import { authRoutes } from "@/features";
import Root from "@/views/root";
import Dashboard from "@/features/dashboard";
import CreateRecipe from "@/features/create-recipe";
import PatientsHome from "@/features/patients";
import RecipeHistory from "@/features/recipe-history";
import RecipeVersion from "@/features/recipe-version";
import NoPermission from "@/components/NoPermission/NoPermission";
import roles from "@/providers/roles";
import Doctors from "@/features/doctors";
import ERecipes from "@/features/recipes";
import Polyclinic from "@/features/polylinic";
import RecipeRecommendation from "@/features/recipe-recommendation";
import IssueHistory from "@/features/issue-history";
import AuthCallback from "@/features/auth/views/modal/AuthCallback";
import { createBrowserRouter } from "react-router-dom";

// const routes: CustomRoute[] = [
//   {
//     id: "root",
//     title: "ERecipe",
//     element: <Root />,
//     loader: async () => null,
//     errorElement: <div>Error element</div>,
//     children: [
//       {
//         id: "create-recipe",
//         path: "/create-recipe",
//         element:
//           import.meta.env.VITE_ROLE === roles.doctor ? (
//             <CreateRecipe />
//           ) : (
//             <NoPermission
//               title="У вас нет доступа к созданию рецепта"
//               text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
//             />
//           ),
//         loader: async () => null,
//         errorElement: <div>Error element</div>,
//       },
//       {
//         id: "doctors",
//         path: "/doctors",
//         element:
//           import.meta.env.VITE_ROLE === roles.mainDoctor ||
//           import.meta.env.VITE_ROLE === roles.minzdrav ? (
//             <Doctors />
//           ) : (
//             <NoPermission
//               title="У вас нет доступа к созданию рецепта"
//               text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
//             />
//           ),
//         loader: async () => null,
//         errorElement: <div>Error element</div>,
//       },
//       {
//         id: "erecipes",
//         path: "/erecipes",
//         element:
//           import.meta.env.VITE_ROLE !== roles.doctor ? (
//             <ERecipes />
//           ) : (
//             <NoPermission
//               title="У вас нет доступа к созданию рецепта"
//               text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
//             />
//           ),
//         loader: async () => null,
//         errorElement: <div>Error element</div>,
//       },
//       {
//         id: "erecipes-recipe-version",
//         path: "/erecipes/recipe-version/:id",
//         element:
//           import.meta.env.VITE_ROLE !== roles.doctor ? (
//             <RecipeVersion />
//           ) : (
//             <NoPermission
//               title="У вас нет доступа к созданию рецепта"
//               text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
//             />
//           ),
//         loader: async () => null,
//         errorElement: <div>Error element</div>,
//       },
//       {
//         id: "patients",
//         path: "/patients",
//         element:
//           import.meta.env.VITE_ROLE !== roles.pharmacy ? (
//             <PatientsHome />
//           ) : (
//             <NoPermission
//               title="У вас нет доступа к созданию рецепта"
//               text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
//             />
//           ),
//         loader: async () => null,
//         errorElement: <div>Error element</div>,
//       },
//       {
//         id: "patient-recipe-history",
//         path: "/patients/:id",
//         element:
//           import.meta.env.VITE_ROLE !== roles.pharmacy ? (
//             <RecipeHistory />
//           ) : (
//             <NoPermission
//               title="У вас нет доступа к созданию рецепта"
//               text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
//             />
//           ),
//         loader: async () => null,
//         errorElement: <div>Error element</div>,
//       },
//       {
//         id: "patient-recipe-version",
//         path: "/patients/recipe-version/:id",
//         element:
//           import.meta.env.VITE_ROLE !== roles.pharmacy ? (
//             <RecipeVersion />
//           ) : (
//             <NoPermission
//               title="У вас нет доступа к созданию рецепта"
//               text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
//             />
//           ),
//         loader: async () => null,
//         errorElement: <div>Error element</div>,
//       },
//       {
//         id: "patient-recipe-edit",
//         path: "/patients/recipe-edit",
//         element:
//           import.meta.env.VITE_ROLE === "DOCTOR" ? (
//             <CreateRecipe />
//           ) : (
//             <NoPermission
//               title="У вас нет доступа к созданию рецепта"
//               text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
//             />
//           ),
//         loader: async () => null,
//         errorElement: <div>Error element</div>,
//       },
//       {
//         id: "dashboard",
//         path: "/",
//         element:
//           import.meta.env.VITE_ROLE !== roles.pharmacy ? (
//             <Dashboard />
//           ) : (
//             <NoPermission
//               title="У вас нет доступа к созданию рецепта"
//               text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
//             />
//           ),
//         index: true,
//         loader: async () => null,
//         errorElement: <div>Error element</div>,
//       },
//       {
//         id: "polyclinic",
//         path: "/polyclinics",
//         element:
//           import.meta.env.VITE_ROLE === roles.minzdrav ? (
//             <Polyclinic />
//           ) : (
//             <NoPermission
//               title="У вас нет доступа к созданию рецепта"
//               text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
//             />
//           ),
//         index: true,
//         loader: async () => null,
//         errorElement: <div>Error element</div>,
//       },
//       {
//         id: "issue-history",
//         path: "/issue-history",
//         element:
//           import.meta.env.VITE_ROLE === roles.pharmacy ? (
//             <IssueHistory />
//           ) : (
//             <NoPermission
//               title="У вас нет доступа к созданию рецепта"
//               text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
//             />
//           ),
//         index: true,
//         loader: async () => null,
//         errorElement: <div>Error element</div>,
//       },
//     ],
//   },
//   {
//     id: "recipe-recommendation",
//     title: "Pharmacy recipe recommendation",
//     path: "/recipe-recommendation/:id",
//     element: <RecipeRecommendation />,
//   },
//   authRoutes,
//   {
//     id: "test",
//     title: "test",
//     path: "auth/callback",
//     element: <AuthCallback />,
//     children: [],
//   },
//   {
//     id: "global-not-found",
//     title: "Not found",
//     path: "*",
//     element: <h1>404: Page not found</h1>,
//   },
// ];

const routes = createBrowserRouter([
  {
    id: "root",
    element: <Root />,
    loader: async () => null,
    errorElement: <div>Error element</div>,
    children: [
      {
        id: "create-recipe",
        path: "/create-recipe",
        element:
          import.meta.env.VITE_ROLE === roles.doctor ? (
            <CreateRecipe />
          ) : (
            <NoPermission
              title="У вас нет доступа к созданию рецепта"
              text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
            />
          ),
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
      {
        id: "doctors",
        path: "/doctors",
        element:
          import.meta.env.VITE_ROLE === roles.mainDoctor ||
          import.meta.env.VITE_ROLE === roles.minzdrav ? (
            <Doctors />
          ) : (
            <NoPermission
              title="У вас нет доступа к созданию рецепта"
              text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
            />
          ),
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
      {
        id: "erecipes",
        path: "/erecipes",
        element:
          import.meta.env.VITE_ROLE !== roles.doctor ? (
            <ERecipes />
          ) : (
            <NoPermission
              title="У вас нет доступа к созданию рецепта"
              text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
            />
          ),
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
      {
        id: "erecipes-recipe-version",
        path: "/erecipes/recipe-version/:id",
        element:
          import.meta.env.VITE_ROLE !== roles.doctor ? (
            <RecipeVersion />
          ) : (
            <NoPermission
              title="У вас нет доступа к созданию рецепта"
              text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
            />
          ),
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
      {
        id: "patients",
        path: "/patients",
        element:
          import.meta.env.VITE_ROLE !== roles.pharmacy ? (
            <PatientsHome />
          ) : (
            <NoPermission
              title="У вас нет доступа к созданию рецепта"
              text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
            />
          ),
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
      {
        id: "patient-recipe-history",
        path: "/patients/:id",
        element:
          import.meta.env.VITE_ROLE !== roles.pharmacy ? (
            <RecipeHistory />
          ) : (
            <NoPermission
              title="У вас нет доступа к созданию рецепта"
              text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
            />
          ),
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
      {
        id: "patient-recipe-version",
        path: "/patients/recipe-version/:id",
        element:
          import.meta.env.VITE_ROLE !== roles.pharmacy ? (
            <RecipeVersion />
          ) : (
            <NoPermission
              title="У вас нет доступа к созданию рецепта"
              text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
            />
          ),
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
      {
        id: "patient-recipe-edit",
        path: "/patients/recipe-edit",
        element:
          import.meta.env.VITE_ROLE === "DOCTOR" ? (
            <CreateRecipe />
          ) : (
            <NoPermission
              title="У вас нет доступа к созданию рецепта"
              text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
            />
          ),
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
      {
        id: "dashboard",
        path: "/",
        element:
          import.meta.env.VITE_ROLE !== roles.pharmacy ? (
            <Dashboard />
          ) : (
            <NoPermission
              title="У вас нет доступа к созданию рецепта"
              text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
            />
          ),
        index: true,
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
      {
        id: "polyclinic",
        path: "/polyclinics",
        element:
          import.meta.env.VITE_ROLE === roles.minzdrav ? (
            <Polyclinic />
          ) : (
            <NoPermission
              title="У вас нет доступа к созданию рецепта"
              text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
            />
          ),
        index: true,
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
      {
        id: "issue-history",
        path: "/issue-history",
        element:
          import.meta.env.VITE_ROLE === roles.pharmacy ? (
            <IssueHistory />
          ) : (
            <NoPermission
              title="У вас нет доступа к созданию рецепта"
              text="Ваши права не позволяют Вам создать рецепт. Выписать рецепты пациенты могут только врачи.  "
            />
          ),
        index: true,
        loader: async () => null,
        errorElement: <div>Error element</div>,
      },
    ],
  },
  {
    id: "recipe-recommendation",
    path: "/recipe-recommendation/:id",
    element: <RecipeRecommendation />,
  },
  authRoutes,
  {
    id: "test",
    path: "auth/callback",
    element: <AuthCallback />,
    children: [],
  },
  {
    id: "global-not-found",
    path: "*",
    element: <h1>404: Page not found</h1>,
  },
]);

export default routes;
