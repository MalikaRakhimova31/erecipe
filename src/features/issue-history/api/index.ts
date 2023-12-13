/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type ListResponse } from "@/types";
import request from "@/utils/axios";
import type { OrderItemTypes, OrderParams, OrdersTypes } from "../types";

// eslint-disable-next-line import/prefer-default-export
export async function getIssueHistory(
  params?: OrderParams,
): Promise<ListResponse<OrdersTypes[]>> {
  const res: ListResponse<OrdersTypes[]> = await request({
    url: "/api/v1/orders/",
    method: "get",
    params,
  });

  return res;
}

export async function getOrdersItem(
  id: string | undefined,
  params?: OrderParams,
): Promise<OrderItemTypes> {
  const res: OrderItemTypes = await request({
    url: `/api/v1/recipe/${id}/get_ordered_detail/`,
    method: "get",
    params,
  });

  return res;
}
