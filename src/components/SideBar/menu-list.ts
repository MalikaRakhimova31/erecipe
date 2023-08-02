import { type SidebarMenuProps } from "@/types";
import roles from "@/providers/roles";

const sidebarMenu: SidebarMenuProps[] = [
  {
    title: "Статистика",
    icon: "/assets/statistics.svg",
    activeIcon: "/assets/active-statistics.svg",
    path: "/",
    roles: [roles.doctor, roles.mainDoctor, roles.minzdrav],
  },
  {
    title: "Поликлиники",
    icon: "/assets/polyclinic.svg",
    activeIcon: "/assets/active-polyclinic.svg",
    path: "/polyclinics",
    roles: [roles.minzdrav],
  },
  {
    title: "Врачи",
    icon: "/assets/doctors.svg",
    activeIcon: "/assets/active-doctors.svg",
    path: "/doctors",
    roles: [roles.mainDoctor, roles.minzdrav],
  },
  {
    title: "Пациенты",
    icon: "/assets/patients.svg",
    path: "/patients",
    activeIcon: "/assets/active-patients.svg",
    roles: [roles.doctor, roles.mainDoctor, roles.minzdrav],
  },
  {
    title: "E-рецепты",
    icon: "/assets/erecipe.svg",
    path: "/erecipes",
    activeIcon: "/assets/active-erecipe.svg",
    roles: [roles.mainDoctor, roles.minzdrav, roles.pharmacy],
  },

  {
    title: "История выдач",
    icon: "/assets/history.svg",
    activeIcon: "/assets/active-history.svg",
    path: "/issue-history",
    roles: [roles.pharmacy],
  },
];

export default sidebarMenu;
