/* eslint-disable @tanstack/query/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { useHaveAccessTo } from "@/helpers/have-access-to";
import { useQuery } from "@tanstack/react-query";
import UserInfoBox from "@/components/UserInfoBox/UserInfoBox";
import { useMemo, useState } from "react";
import type { ApexOptions } from "apexcharts";
import { format } from "date-fns";
import { Flex, Text } from "@chakra-ui/react";
import { getDoctors } from "@/features/doctors/api";
import type {
  HealthMinistryDashTableProps,
  Organizations,
  PatientsIndicatorTBTypes,
  StatsState,
} from "../types";
import {
  getOrganizations,
  getPatients,
  getPatientsStats,
  getPractitionerCount,
  getRecipeStats,
} from "../api";

export default function useStatsState(): StatsState {
  const PAGE_SIZE = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const healthMinistryTable = useHaveAccessTo("clinics-indicators");
  const isPractitionerCount = useHaveAccessTo("practitioner-count");
  const isDoctor = useHaveAccessTo("patient-indicators");
  const isMainDoctor = useHaveAccessTo("doctors-indicators");

  const { data: patientsData, isLoading: patientsLoading } = useQuery({
    queryKey: ["patients", currentPage],
    queryFn: async () => {
      const res = await getPatients({
        page: currentPage,
        page_size: PAGE_SIZE,
      });
      return res;
    },
    enabled: !!isDoctor,
  });

  const { data: doctors, isLoading: doctorsLoading } = useQuery({
    queryKey: ["doctors", currentPage, PAGE_SIZE],
    queryFn: async () => {
      const res = await getDoctors({
        page: currentPage,
        page_size: PAGE_SIZE,
      });
      return res;
    },
    enabled: !!isMainDoctor,
  });

  const doctorsTB = useMemo(
    () =>
      doctors?.results.map((el) => ({
        name: (
          <UserInfoBox
            src="/assets/users/user1.png"
            name={`${el.first_name ?? ""} ${el.last_name ?? ""}`}
          />
        ),
        givenRecipes: el.done_recipe_count,
        appointments: el.recipes_items_count,
      })),
    [doctors],
  );

  const patientsIndicatorTB: PatientsIndicatorTBTypes[] | undefined = useMemo(
    () =>
      patientsData?.results.map((el) => ({
        id: `${el.id}&${el.nnuzb}`,
        name: (
          <UserInfoBox
            src="/assets/users/user1.png"
            name={`${el.firstname ?? ""} ${el.lastname ?? ""}`}
          />
        ),
        date: format(new Date(el.last_visited), "dd/MM/yyyy (HH:mm)"),
        edit: (
          <Flex
            alignItems="center"
            justifyContent="center"
            bg="#EBFAF9"
            borderRadius="8px"
            px="16px"
            py="12px"
            w="fit-content"
          >
            <Text color="primary.main" fontSize="12px" fontWeight="500">
              Все рецепты
            </Text>
          </Flex>
        ),
      })),
    [patientsData],
  );

  const { data: patientsStats } = useQuery({
    queryKey: ["patients_statistics"],
    queryFn: async () => {
      const res = await getPatientsStats();
      return res;
    },
  });

  const { data: oraganizationsData, isLoading: organizationsLoading } =
    useQuery({
      queryKey: ["organizations", currentPage, PAGE_SIZE],
      queryFn: async () => {
        const res = await getOrganizations({
          page: currentPage,
          page_size: PAGE_SIZE,
        });
        return res;
      },
      enabled: !!healthMinistryTable,
    });

  const healthMinistryDashTableBody:
    | HealthMinistryDashTableProps[]
    | undefined = useMemo(
    () =>
      oraganizationsData?.results?.map((org: Organizations) => ({
        organization: (
          <UserInfoBox src="/assets/users/user1.png" name={org.name.ru} />
        ),
        address: `${org.addresso[0]?.district?.name.ru ?? ""} ${
          org.addresso[0]?.line ?? ""
        }`,
        done: org.recipe_counts.done,
        new: org.recipe_counts.new,
        expired: org.recipe_counts.expire,
        id: org.id,
      })),
    [oraganizationsData],
  );

  const { data: recipeStats } = useQuery({
    queryKey: ["recipe-stats"],
    queryFn: async () => {
      const res = await getRecipeStats();
      return res;
    },
  });
  const { data: practitionerCount } = useQuery({
    queryKey: ["practitioner-count"],
    queryFn: async () => {
      const res = await getPractitionerCount();
      return res;
    },
  });

  const patientsDonutsLabel = useMemo(
    () =>
      patientsStats?.gender_data?.map(
        (gender) =>
          `${
            gender.gender === "female"
              ? `Женщины: ${gender.count}`
              : `Мужчины: ${gender.count}`
          }`,
      ),
    [patientsStats],
  );

  const recipeDoughnutLabel = useMemo(
    () =>
      // eslint-disable-next-line consistent-return
      recipeStats?.data.map((el) => {
        if (el.status === "done") return `Выписано: ${el.count}`;
        if (el.status === "new") return `Выдано аптекой: ${el.count}`;
        if (el.status === "expired") return `Истекло: ${el.count}`;
        return "";
      }),
    [recipeStats],
  );

  const recipeDoughnutSeries = useMemo(
    () => recipeStats?.data.map((el) => Number(el.percent)),
    [recipeStats],
  );

  const patientsDoughnutSeries = useMemo(
    () => patientsStats?.gender_data.map((el) => Number(el.percent)),
    [patientsStats],
  );

  const patientsDoughnut: ApexOptions = {
    labels: patientsDonutsLabel,
    chart: {
      type: "donut",
    },
    legend: {
      position: "right",
      horizontalAlign: "center",
      fontWeight: 600,
    },
    series: patientsDoughnutSeries,
    plotOptions: {
      pie: {
        donut: {
          size: "80%",
          labels: {
            show: true,
            value: {
              show: true,
              fontSize: "24px",
              fontWeight: 700,
              color: "#393D4E",
              offsetY: 2,
              // formatter: function (val: number | string) {
              //   return `${val}%`;
              // },
            },
            total: {
              show: true,
              showAlways: true,
              label: "Общее кол-во",
              fontSize: "12px",
              color: "#8E93AA",
              formatter: function () {
                const newVal = patientsStats?.total;
                return String(newVal);
              },
            },
          },
        },
      },
    },

    colors: ["#FF4E4E", "#2097F6"],
  };
  const recipeDoughnut: ApexOptions = {
    labels: recipeDoughnutLabel ?? [],
    chart: {
      type: "donut",
    },
    legend: {
      position: "right",
      horizontalAlign: "center",
      fontWeight: 600,
    },
    series: recipeDoughnutSeries,
    plotOptions: {
      pie: {
        donut: {
          size: "80%",
          labels: {
            show: true,
            value: {
              show: true,
              fontSize: "24px",
              fontWeight: 700,
              color: "#393D4E",
              offsetY: 2,
              // formatter: function (val: number | string) {
              //   return `${val}#`;
              // },
            },
            total: {
              show: true,
              showAlways: true,
              label: "Общее кол-во",
              fontSize: "12px",
              color: "#8E93AA",
              fontWeight: 400,
              formatter: function () {
                const newVal = recipeStats?.total;
                return String(newVal);
              },
            },
          },
        },
      },
    },

    colors: ["#0ABAB5", "#FF4E4E", "#9B51E0"],
  };

  return {
    patientsLoading,
    patientsData,
    healthMinistryTable,
    healthMinistryDashTableBody,
    organizationsLoading,
    PAGE_SIZE,
    currentPage,
    setCurrentPage,
    oraganizationsData,
    patientsDonutsLabel,
    patientsStats,
    patientsDoughnut,
    patientsDoughnutSeries,
    recipeDoughnutSeries,
    recipeDoughnut,
    recipeStats,
    isPractitionerCount,
    practitionerCount,
    patientsIndicatorTB,
    isDoctor,
    doctors,
    doctorsTB,
    isMainDoctor,
    doctorsLoading,
  };
}
