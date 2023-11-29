import type { CustomRoute } from "@/types";
import Auth from "@/features/auth";
import Modal from "@/features/auth/views/modal/modal";
import AuthCallback from "@/features/auth/views/modal/AuthCallback";

const routes: CustomRoute = {
  id: "auth",
  title: "Auth",
  path: "auth",
  element: <Auth />,
  children: [
    {
      id: "modal",
      title: "Modal",
      path: "modal",
      element: <Modal />,
    },
    {
      id: "callback",
      path: "callback",
      element: <AuthCallback />,
      children: [],
    },
  ],
};

export default routes;
