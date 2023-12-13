/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @tanstack/query/exhaustive-deps */
// eslint-disable-next-line import/no-extraneous-dependencies
import * as XLSX from "xlsx";
import { useHaveAccessTo } from "@/helpers/have-access-to";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "usehooks-ts";
import { useForm } from "react-hook-form";
import { getRegions, getRegionsById } from "@/features/api";
import { getOrganizations } from "@/features/dashboard/api";
import StatusBox from "@/components/StatusBox/StatusBox";
import format from "date-fns/format";
import CButton from "@/components/button/button";
import { useNavigate } from "react-router-dom";
import { getRecipes } from "../api";
import type { FormValues, RecipeStats, ministryTableProps } from "../types";

export default function useRecipeState(): RecipeStats {
  const isMinistry = useHaveAccessTo("ministry-recipe-table");
  const isMainDoctor = useHaveAccessTo("main-doctor-recipe-table");
  const isPharmacy = useHaveAccessTo("recipes-pharmacy-table");
  const isStatusBtn = useHaveAccessTo("status-button");
  const PAGE_SIZE = 10;
  const [isExported, setIsExported] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search, 3000);
  const navigate = useNavigate();
  const [params, setParams] = useState({
    region: "",
    organization: "",
    status: "",
  });

  console.log("searching===>", search);

  const { control, handleSubmit, reset, watch } = useForm<FormValues>({
    defaultValues: {
      area: { value: "", label: "" },
      city: { value: "", label: "" },
      region: { value: "", label: "" },
      polyclinic: [],
      status: "",
    },
  });

  const { data: recipes, isLoading: recipeLoading } = useQuery({
    queryKey: ["RECIPES", currentPage, PAGE_SIZE, debounced, params],
    queryFn: async () => {
      const res = await getRecipes({
        organization: params.organization,
        status: params.status.length > 0 ? params.status : null,
        region: params.region,
        page: currentPage,
        page_size: PAGE_SIZE,
        uid_ppn: search.toUpperCase(),
        search,
      });
      return res;
    },
  });

  console.log("recipes", recipes);

  const { isFetching } = useQuery({
    queryKey: ["RECIPES", debounced, params],
    queryFn: async () => {
      const res = await getRecipes({
        organization: params.organization,
        status: params.status.length > 0 ? params.status : null,
        region: params.region,
        page_size: 999_999_999,
        search,
      });
      return res;
    },
    enabled: !!isExported,
    onSuccess: (res) => {
      const customColumns = res?.results.map((el) => ({
        id: el.uid,
        created: format(new Date(el.created_at), "dd/MM/yyyy (HH:mm)"),
        expired: format(new Date(el.created_at), "dd/MM/yyyy (HH:mm)"),
        version: "2 версия",
        patient: `${el.patient.firstname} ${el.patient.lastname}`,
        doctor: `${
          el.practitioner.firstname !== null ? el.practitioner.firstname : ""
        } ${el.practitioner.lastname !== null ? el.practitioner.lastname : ""}`,
        status: el.status,
      }));
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(customColumns);
      const columnWidths = [
        { wch: 10 },
        { wch: 55 },
        { wch: 15 },
        { wch: 25 },
        { wch: 20 },
        { wch: 20 },
        { wch: 15 },
      ];

      worksheet["!cols"] = columnWidths;
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      XLSX.writeFile(workbook, "erecipe.xlsx");
      setIsExported(false);
    },
  });

  const ministryTB: ministryTableProps[] | undefined = useMemo(
    () =>
      recipes?.results.map((el) => ({
        id: el.uid,
        created: format(new Date(el.created_at), "dd/MM/yyyy (HH:mm)"),
        expired: format(new Date(el.created_at), "dd/MM/yyyy (HH:mm)"),
        version: "2 версия",
        patient: `${el.patient.firstname} ${el.patient.lastname}`,
        doctor: `${
          el.practitioner.firstname !== null ? el.practitioner.firstname : "--"
        } ${
          el.practitioner.lastname !== null ? el.practitioner.lastname : "--"
        }`,
        status: <StatusBox status={el.status} />,
      })),
    [recipes],
  );

  const pharmacyTB = useMemo(
    () =>
      isPharmacy &&
      recipes?.results.map((el) => ({
        id: el.uid,
        created: format(new Date(el.created_at), "dd/MM/yyyy (HH:mm)"),
        pinfl: el.patient.nnuzb,
        patient: `${el.patient.firstname} ${el.patient.lastname}`,
        status: <StatusBox status={el.status} />,
        action: (
          <CButton
            variant="solid"
            text="Посмотреть"
            disabled={el.status === "expired"}
            buttonType="button"
            onClick={() => {
              navigate(`/recipe-recommendation/${el.uid}`);
            }}
          />
        ),
      })),
    [recipes, isPharmacy],
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
  const { data: polyclinics } = useQuery({
    queryKey: ["polyclinics"],
    queryFn: async () => {
      const res = await getOrganizations();
      return res;
    },
    enabled: !!isMinistry,
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

  const statusOptions = [
    { value: "new", label: "Новый" },
    { value: "done", label: "Доне" },
    { value: "expired", label: "Истёк" },
  ];
  const polyclinicOptions = useMemo(
    () =>
      polyclinics?.results?.map((el) => ({
        value: el.id,
        label: el.name.ru,
      })),
    [polyclinics],
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
      status: data.status?.value,
    }));
    setFilter(false);
  };

  return {
    isMinistry,
    recipes,
    recipeLoading,
    regionsOption,
    valleyOptions,
    cityOptions,
    filter,
    setFilter,
    setSearch,
    statusOptions,
    onSubmit,
    handleSubmit,
    reset,
    control,
    setParams,
    currentPage,
    setCurrentPage,
    PAGE_SIZE,
    search,
    polyclinicOptions,
    isMainDoctor,
    ministryTB,
    setIsExported,
    isFetching,
    isStatusBtn,
    pharmacyTB,
    isPharmacy,
  };
}
