import type { CustomRoute } from "@/types";
import { Outlet } from "react-router-dom";

// VIEW IMPORTS
import Modal from "@/features/auth/views/modal/modal";

const routes: CustomRoute = {
  id: "auth",
  title: "Auth",
  path: "auth",
  element: (
    <>
      <div>auth route</div>
      <Outlet />
    </>
  ),
  children: [
    // ROUTES
    {
      id: "modal",
      title: "Modal",
      path: "modal",
      element: <Modal />,
      children: [],
    },
  ],
};

export default routes;
