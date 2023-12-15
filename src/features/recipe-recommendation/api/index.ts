/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable import/prefer-default-export */
import request from "@/utils/axios";
import { type ListResponse } from "@/types";
import type {
  OrderType,
  RecipeItemProps,
  RecommendationParams,
} from "../types";

export async function getRecipeItem(
  params?: RecommendationParams,
): Promise<ListResponse<RecipeItemProps[]>> {
  const res: ListResponse<RecipeItemProps[]> = await request({
    url: `/api/v1/recipe_item/`,
    method: "get",
    params,
  });

  return res;
}

export async function sendRecipe(
  data: Exclude<Partial<OrderType>, "id">,
): Promise<Exclude<Partial<OrderType>, "id">> {
  const result: Exclude<Partial<OrderType>, "id"> = await request({
    url: `/api/v1/orders/`,
    method: "post",
    data,
  });

  return result;
}
