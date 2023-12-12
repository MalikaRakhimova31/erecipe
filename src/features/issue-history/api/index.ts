/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type ListResponse } from "@/types";
import request from "@/utils/axios";
import type { OrderParams, OrdersTypes } from "../types";

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
  id: string | null,
  params?: OrderParams,
): Promise<OrdersTypes> {
  const res: OrdersTypes = await request({
    url: `/api/v1/orders/${id}/`,
    method: "get",
    params,
  });

  return res;
}
