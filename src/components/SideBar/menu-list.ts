import { type SidebarMenuProps } from "@/types";

const sidebarMenu: SidebarMenuProps[] = [
  {
    title: "Пациенты",
    icon: "/assets/patients.svg",
    path: "/patients",
    activeIcon: "/assets/active-patients.svg",
  },
  {
    title: "Статистика",
    icon: "/assets/statistics.svg",
    activeIcon: "/assets/active-statistics.svg",
    path: "/",
  },
];

export default sidebarMenu;
