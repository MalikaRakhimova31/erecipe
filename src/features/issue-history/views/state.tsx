/* eslint-disable no-nested-ternary */
/* eslint-disable @tanstack/query/exhaustive-deps */
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "usehooks-ts";
import { format } from "date-fns";
import StatusBox from "@/components/StatusBox/StatusBox";
import { useNavigate } from "react-router-dom";
import CButton from "@/components/button/button";
import { getIssueHistory } from "../api";
import type { OrderState } from "../types";

export default function useIssueHistory(): OrderState {
  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const debounced = useDebounce(search, 3000);
  const { data: orders, isLoading: ordersLoading } = useQuery({
    queryKey: ["ORDERS", currentPage, PAGE_SIZE, debounced],
    queryFn: async () => {
      const res = await getIssueHistory({
        page: currentPage,
        page_size: PAGE_SIZE,
        search,
      });
      return res;
    },
  });

  const tableBody = useMemo(
    () =>
      orders?.results.map((el) => ({
        id: el.recipe.uid,
        createdAt: format(new Date(el.recipe.created_at), "yyyy/MM/dd (HH:mm)"),
        given: format(new Date(el.created_at), "yyyy/MM/dd (HH:mm)"),
        patient: `${el.recipe.patient.firstname} ${el.recipe.patient.lastname}`,
        quantity: `${el.qty} назначений`,
        status: <StatusBox status={el.recipe.status} />,
        action: (
          <CButton
            text="Детали"
            variant="gray"
            onClick={() => {
              navigate(`/issues-history/${el.id}`);
            }}
            buttonType="button"
          />
        ),
      })),
    [orders],
  );

  console.log("orders", orders);
  return {
    orders,
    ordersLoading,
    currentPage,
    tableBody,
    setCurrentPage,
    PAGE_SIZE,
    search,
    setSearch,
  };
}
