import type { CustomRoute } from "@/types";
import Auth from "@/features/auth";
import AuthCallback from "@/features/auth/views/modal/AuthCallback";
import AuthLoading from "./views/modal/AuthLoading";

const routes: CustomRoute = {
  id: "auth",
  title: "Auth",
  path: "auth",
  element: <Auth />,
  children: [
    // {
    //   id: "modal",
    //   title: "Modal",
    //   path: "modal",
    //   element: <Modal />,
    // },
    {
      id: "callback",
      path: "callback",
      element: <AuthCallback />,
      children: [],
    },
    {
      id: "full-loader",
      path: "loading",
      element: <AuthLoading />,
    },
  ],
};

export default routes;
