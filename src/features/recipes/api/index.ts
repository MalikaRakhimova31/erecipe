import { type ListResponse } from "@/types";
import request from "@/utils/axios";
import { type RecipeParams, type RecipeTypes } from "../types";

// eslint-disable-next-line import/prefer-default-export
export async function getRecipes(
  params?: RecipeParams,
): Promise<ListResponse<RecipeTypes[]>> {
  const res: ListResponse<RecipeTypes[]> = await request({
    url: "/api/v1/recipe/",
    method: "get",
    params,
  });

  return res;
}
