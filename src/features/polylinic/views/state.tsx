/* eslint-disable @tanstack/query/exhaustive-deps */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { getOrganizations } from "@/features/dashboard/api";
import UserInfoBox from "@/components/UserInfoBox/UserInfoBox";
import {
  type HealthMinistryDashTableProps,
  type Organizations,
} from "@/features/dashboard/types";
import { getRegions, getRegionsById } from "@/features/api";
import { useForm } from "react-hook-form";
import { useDebounce } from "usehooks-ts";
import type { FormValues, PolyclinicState } from "../types";

export default function usePolyclinicState(): PolyclinicState {
  const [params, setParams] = useState<Array<number | string>>();
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<boolean>(false);
  const [search, setSearch] = useState<string>();
  const debouncedSearch = useDebounce(search, 3000);
  const PAGE_SIZE = 10;
  const { control, handleSubmit, watch, reset } = useForm<FormValues>({
    defaultValues: {
      area: { value: "", label: "" },
      city: { value: "", label: "" },
      region: { value: "", label: "" },
    },
  });

  const { data: oraganizationsData, isLoading: organizationsLoading } =
    useQuery({
      queryKey: [
        "healthMinistry-polyclinics",
        currentPage,
        PAGE_SIZE,
        params,
        debouncedSearch,
      ],
      queryFn: async () => {
        const res = await getOrganizations({
          page: currentPage,
          page_size: PAGE_SIZE,
          region: params?.join(","),
          search,
        });
        return res;
      },
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

  const { data: cities } = useQuery({
    queryKey: ["regions-by-id", watch("area")?.value],
    queryFn: async () => {
      const res = await getRegionsById({
        id: watch("area")?.value,
      });
      return res;
    },
    enabled: !!watch("area"),
  });
  const { data: valley } = useQuery({
    queryKey: ["regions-by-id", watch("city")],
    queryFn: async () => {
      const res = await getRegionsById({
        id: watch("city").value,
      });
      return res;
    },
    enabled: !!watch("city"),
  });

  const cityOptions = useMemo(
    () => cities?.childs.map((el) => ({ value: el.id, label: el.name.ru })),
    [cities],
  );
  const valleyOptions = useMemo(
    () => valley?.childs.map((el) => ({ value: el.id, label: el.name.ru })),
    [valley],
  );
  const { data: regions } = useQuery({
    queryKey: ["regions"],
    queryFn: async () => {
      const res = await getRegions();
      return res;
    },
  });
  const regionsOption = useMemo(
    () =>
      regions?.results.map((el) => ({
        value: el.id,
        label: el.name.ru,
      })),
    [regions],
  );
  const onSubmit = (data: FormValues): void => {
    // Combine the values into a single string
    const arr = [];
    if (data.area.value) {
      arr.push(data.area.value);
    }
    if (data.city.value) {
      arr.push(data.city.value);
    }
    if (data.region.value) {
      arr.push(data.region.value);
    }
    setParams(arr);
    setFilter(false);
  };

  return {
    oraganizationsData,
    organizationsLoading,
    setCurrentPage,
    currentPage,
    PAGE_SIZE,
    healthMinistryDashTableBody,
    cityOptions,
    valleyOptions,
    regionsOption,
    onSubmit,
    handleSubmit,
    control,
    reset,
    filter,
    setFilter,
    params,
    search,
    setSearch,
  };
}
