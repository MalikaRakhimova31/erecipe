/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @tanstack/query/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useDebounce } from "usehooks-ts";
import { useHaveAccessTo } from "@/helpers/have-access-to";
import UserInfoBox from "@/components/UserInfoBox/UserInfoBox";
import { Flex, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { getPractitionerRoles } from "@/features/doctors/api";
import { getOrganizations } from "@/features/dashboard/api";
import { getRegions, getRegionsById } from "@/features/api";
import { format } from "date-fns";
import { getPatients } from "../api";
import type { FormValues, PatientState, healthPatientsTBTypes } from "../types";

export default function usePatientState(): PatientState {
  const isCalendar = useHaveAccessTo("filter-calendar");
  const isFilter = useHaveAccessTo("filter-modal");
  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search, 3000);
  const [filterDate, setFilterDate] = useState(undefined);
  const isMainDoctor = useHaveAccessTo("main-doctor-patient-table");
  const [params, setParams] = useState({
    region: "",
    organization: "",
    practitioner_role: "",
  });

  const { control, handleSubmit, reset, watch } = useForm<FormValues>({
    defaultValues: {
      area: { value: "", label: "" },
      city: { value: "", label: "" },
      region: { value: "", label: "" },
      polyclinic: [],
      specialization: [],
    },
  });

  const { data: patients, isLoading: patientssLoading } = useQuery({
    queryKey: [
      "patients",
      currentPage,
      PAGE_SIZE,
      debounced,
      params,
      filterDate,
    ],
    queryFn: async () => {
      const res = await getPatients({
        organization: params.organization,
        practitioner_role: params.practitioner_role,
        region: params.region,
        page: currentPage,
        page_size: PAGE_SIZE,
        search,
        visited: filterDate
          ? format(new Date(filterDate), "yyyy-MM-dd")
          : undefined,
      });
      return res;
    },
  });

  const { data: roles } = useQuery({
    queryKey: ["specialization_roles"],
    queryFn: async () => {
      const res = await getPractitionerRoles();
      return res;
    },
    enabled: !!isFilter,
  });

  const { data: polyclinics } = useQuery({
    queryKey: ["polyclinics"],
    queryFn: async () => {
      const res = await getOrganizations();
      return res;
    },
    enabled: !!isFilter,
  });

  const polyclinicOptions = useMemo(
    () =>
      polyclinics?.results?.map((el) => ({
        value: el.id,
        label: el.name.ru,
      })),
    [polyclinics],
  );

  const { data: regions } = useQuery({
    queryKey: ["regions"],
    queryFn: async () => {
      const res = await getRegions();
      return res;
    },
    enabled: !!isFilter,
  });
  const { data: cities } = useQuery({
    queryKey: ["regions-by-id", watch("area.value")],
    queryFn: async () => {
      const res = await getRegionsById({
        id: watch("area.value"),
      });
      return res;
    },
    enabled: !!watch("area"),
  });
  const { data: valley } = useQuery({
    queryKey: ["regions-by-id", watch("city.value")],
    queryFn: async () => {
      const res = await getRegionsById({
        id: watch("city.value"),
      });
      return res;
    },
    enabled: !!watch("city"),
  });
  const regionsOption = useMemo(
    () =>
      regions?.results.map((el) => ({
        value: el.id,
        label: el.name.ru,
      })),
    [regions],
  );
  const valleyOptions = useMemo(
    () => valley?.childs.map((el) => ({ value: el.id, label: el.name.ru })),
    [valley],
  );

  const cityOptions = useMemo(
    () => cities?.childs.map((el) => ({ value: el.id, label: el.name.ru })),
    [cities],
  );

  const specializationOptions = useMemo(
    () => roles?.results.map((el) => ({ value: el.id, label: el.name.ru })),
    [roles],
  );

  const healthPatientsTB: healthPatientsTBTypes[] | undefined = useMemo(
    () =>
      patients?.results.map((el) => ({
        id: `${el.id}&${el.nnuzb}`,
        patient: (
          <UserInfoBox
            src="/assets/users/user1.png"
            name={`${el.firstname} ${el.lastname} ${el.middlename}`}
          />
        ),
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
    [patients],
  );

  const mainDoctorPatientsTB = useMemo(
    () =>
      isMainDoctor &&
      patients?.results.map((el) => ({
        id: `${el.id}&${el.nnuzb}`,
        patient: (
          <UserInfoBox
            src="/assets/users/user1.png"
            name={`${el.firstname} ${el.lastname} ${el.middlename}`}
          />
        ),
        lastVisit: format(new Date(el.last_visited), "yyyy/MM/dd, (HH:mm)"),
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
    [patients],
  );

  const onSubmit = (data: FormValues): void => {
    const arr: Array<string | number> = [];
    if (data.area.value) {
      arr.push(data.area.value);
    }
    if (data.city.value) {
      arr.push(data.city.value);
    }
    if (data.region.value) {
      arr.push(data.region.value);
    }
    setParams((prev) => ({
      ...prev,
      region: arr.join(","),
      organization: data.polyclinic.length
        ? data?.polyclinic?.map((el) => el.value)?.join(",")
        : "",
      practitioner_role: data.specialization.length
        ? data?.specialization?.map((el) => el.value)?.join(",")
        : "",
    }));
    setFilter(false);
  };

  return {
    patients,
    patientssLoading,
    currentPage,
    setCurrentPage,
    isCalendar,
    setSearch,
    search,
    healthPatientsTB,
    isFilter,
    PAGE_SIZE,
    regionsOption,
    cityOptions,
    valleyOptions,
    polyclinicOptions,
    specializationOptions,
    filter,
    setFilter,
    handleSubmit,
    control,
    onSubmit,
    reset,
    setParams,
    setFilterDate,
    mainDoctorPatientsTB,
    isMainDoctor,
  };
}
