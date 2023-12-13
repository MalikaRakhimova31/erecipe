import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import StatusBox from "@/components/StatusBox/StatusBox";
import { type OrderItemState } from "../types";
import { getOrdersItem } from "../api";

export default function useOrderItemState(): OrderItemState {
  const { id } = useParams();

  const { data: orderItem, isLoading: orderItemLoading } = useQuery({
    queryKey: ["ORDERS_ITEM", id],
    queryFn: async () => {
      const res = await getOrdersItem(id);
      return res;
    },
    enabled: !(id == null),
  });

  console.log("orderId", id);

  const tableHeader = [
    "нАЗВАНИЕ лекарства",
    "МНН",
    "кол-во/лекарственная форма",
    "# назначения",
    "место выдачи",
    "статус",
  ];

  const tableBody = useMemo(
    () =>
      orderItem?.items.map((el) => ({
        name: el?.order_item?.drug ?? "--",
        mnn: el.mnn.ru,
        quantity: el.unit,
        appointment: `Назначение #${el.id}`,
        organization: el?.order_item?.organization.ru ?? "--",
        status: (
          <StatusBox status={el.order_item !== null ? "new" : "notIssued"} />
        ),
      })),
    [orderItem],
  );
  return { orderItem, orderItemLoading, tableHeader, tableBody };
}
