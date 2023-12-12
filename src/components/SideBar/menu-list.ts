import { type SidebarMenuProps } from "@/types";
import { roles } from "@/config/permissions";

const sidebarMenu: SidebarMenuProps[] = [
  {
    title: "Статистика",
    icon: "/assets/statistics.svg",
    activeIcon: "/assets/active-statistics.svg",
    path: "/dashboard",
    roles: [roles.doctor, roles.mainDoctor, roles.healthMinistry],
  },
  {
    title: "Поликлиники",
    icon: "/assets/polyclinic.svg",
    activeIcon: "/assets/active-polyclinic.svg",
    path: "/polyclinics",
    roles: [roles.healthMinistry],
  },
  {
    title: "Врачи",
    icon: "/assets/doctors.svg",
    activeIcon: "/assets/active-doctors.svg",
    path: "/doctors",
    roles: [roles.mainDoctor, roles.healthMinistry],
  },
  {
    title: "Пациенты",
    icon: "/assets/patients.svg",
    path: "/patients",
    activeIcon: "/assets/active-patients.svg",
    roles: [roles.doctor, roles.mainDoctor, roles.healthMinistry],
  },
  {
    title: "E-рецепты",
    icon: "/assets/erecipe.svg",
    path: "/erecipes",
    activeIcon: "/assets/active-erecipe.svg",
    roles: [roles.mainDoctor, roles.healthMinistry, roles.pharmacy],
  },

  {
    title: "История выдач",
    icon: "/assets/history.svg",
    activeIcon: "/assets/active-history.svg",
    path: "/issues-history",
    roles: [roles.pharmacy],
  },
];

export default sidebarMenu;
