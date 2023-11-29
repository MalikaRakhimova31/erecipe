import { useLocation } from "react-router-dom";
import type { sections } from "@/config/permissions";

export default function useSection(): keyof typeof sections {
  const { pathname } = useLocation();

  return (
    (pathname.split("/").at(1)?.split("?").at(0) as keyof typeof sections) ?? ""
  );
}
