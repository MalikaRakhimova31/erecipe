import {
  type SectionPart,
  groups,
  type roles,
  type sections,
} from "@/config/permissions";
import permissions from "@/config/permissions";
import useSection from "@/hooks/use-section";
import getItem from "./get-item";
import getSection from "./get-section";

export default function haveAccessTo(
  part: SectionPart,
  section?: keyof typeof sections,
): boolean {
  const userRole = getItem("role");

  if (userRole === null) {
    return false;
  }

  if (typeof section === "string") {
    return permissions[section][part].includes(
      groups[userRole as keyof typeof groups],
    );
  }

  const madeUpSection = getSection() as keyof typeof sections;

  return permissions[madeUpSection][part].includes(
    userRole as keyof typeof roles,
  );
}

export function useHaveAccessTo(part: SectionPart): boolean {
  const section = useSection();

  return haveAccessTo(part, section);
}
