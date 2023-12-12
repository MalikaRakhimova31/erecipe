import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { type OrderItemState } from "../types";
import { getOrdersItem } from "../api";

export default function useOrderItemState(): OrderItemState {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("id");
  const { data: orderItem, isLoading: orderItemLoading } = useQuery({
    queryKey: ["ORDERS_ITEM", orderId],
    queryFn: async () => {
      const res = await getOrdersItem(orderId);
      return res;
    },
    enabled: !(orderId == null),
  });

  const tableHeader = [
    "нАЗВАНИЕ лекарства",
    "МНН",
    "кол-во/лекарственная форма",
    "# назначения",
    "место выдачи",
    "статус",
  ];

  //   const tableBody = useMemo(
  //     () => ({
  //       name: "",
  //       mnn: "",
  //       quantity: orderItem?.qty,
  //     }),
  //     [orderItem],
  //   );
  return { orderItem, orderItemLoading, tableHeader };
}
