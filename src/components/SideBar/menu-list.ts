import { type SidebarMenuProps } from "@/types";

const sidebarMenu: SidebarMenuProps[] = [
  {
    title: "Статистика",
    icon: "/assets/statistics.svg",
    activeIcon: "/assets/active-statistics.svg",
    path: "/",
  },
  // {
  //   title: "E-рецепты",
  //   icon: "/assets/erecipe.svg",
  //   path: "/create-recipe",
  //   activeIcon: "/assets/active-erecipe.svg",
  // },
  {
    title: "Пациенты",
    icon: "/assets/patients.svg",
    path: "/patients",
    activeIcon: "/assets/active-patients.svg",
  },
  // {
  //   title: "Настройки",
  //   icon: "/assets/settings.svg",
  //   path: "/settings",
  //   activeIcon: "/assets/active-settings.svg",
  // },
];

export default sidebarMenu;
