/* eslint-disable @tanstack/query/exhaustive-deps */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import UserInfoBox from "@/components/UserInfoBox/UserInfoBox";
import { useHaveAccessTo } from "@/helpers/have-access-to";
import { useForm } from "react-hook-form";
import { getRegions, getRegionsById } from "@/features/api";
import { getOrganizations } from "@/features/dashboard/api";
import { useDebounce } from "usehooks-ts";
import { getDoctors, getPractitionerRoles } from "../api";
import type { DoctorState, FormValues, MinistryDoctorTBTypes } from "../types";

export default function useDoctorState(): DoctorState {
  const PAGE_SIZE = 10;
  const isMinistry = useHaveAccessTo("health-ministry-doctors");
  const isMainDoctor = useHaveAccessTo("doctors-table");
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState("");

  const [params, setParams] = useState({
    region: "",
    organization: "",
    practitioner_role: "",
  });
  const debounced = useDebounce(search, 3000);
  const { control, handleSubmit, reset, watch } = useForm<FormValues>({
    defaultValues: {
      area: { value: "", label: "" },
      city: { value: "", label: "" },
      region: { value: "", label: "" },
      polyclinic: [],
      specialization: [],
    },
  });

  const { data: doctors, isLoading: doctorsLoading } = useQuery({
    queryKey: ["doctors", params, currentPage, PAGE_SIZE, debounced],
    queryFn: async () => {
      const res = await getDoctors({
        organization: params.organization,
        practitioner_role: params.practitioner_role,
        region: params.region,
        page: currentPage,
        page_size: PAGE_SIZE,
        search,
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
    enabled: !!isMinistry,
  });

  const { data: polyclinics } = useQuery({
    queryKey: ["polyclinics"],
    queryFn: async () => {
      const res = await getOrganizations();
      return res;
    },
    enabled: !!isMinistry,
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
    enabled: !!isMinistry,
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

  const ministryDoctorsTB: MinistryDoctorTBTypes[] | undefined = useMemo(
    () =>
      doctors?.results?.map((doctor) =>
        isMinistry
          ? {
              name: (
                <UserInfoBox
                  src="/assets/users/user1.png"
                  name={`${doctor.first_name} ${doctor.last_name}`}
                />
              ),
              organization: doctor.organization.name.ru,
              specialization: doctor.practitioner_role.name.ru,
              phone: (
                <div className="flex flex-col gap-y-2">
                  {doctor.phones.map((el) => (
                    <span key={el.id}>{el.value}</span>
                  ))}
                </div>
              ),
            }
          : {
              name: (
                <UserInfoBox
                  src="/assets/users/user1.png"
                  name={`${doctor.first_name} ${doctor.last_name}`}
                />
              ),
              specialization: doctor.practitioner_role.name.ru,
              given_recipes: doctor.done_recipe_count,
              phone: (
                <div className="flex flex-col gap-y-2">
                  {doctor.phones.map((el) => (
                    <span key={el.id}>{el.value}</span>
                  ))}
                </div>
              ),
            },
      ),
    [doctors, isMinistry],
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
    doctors,
    doctorsLoading,
    ministryDoctorsTB,
    PAGE_SIZE,
    currentPage,
    setCurrentPage,
    isMinistry,
    isMainDoctor,
    filter,
    setFilter,
    control,
    handleSubmit,
    onSubmit,
    reset,
    regionsOption,
    valleyOptions,
    cityOptions,
    polyclinicOptions,
    specializationOptions,
    params,
    search,
    setSearch,
  };
}
