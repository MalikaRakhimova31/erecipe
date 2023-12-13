/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable import/prefer-default-export */
import request from "@/utils/axios";
import { type RecommendationParams, type RecommendationTypes } from "../types";

export async function getRecommendations(
  params?: RecommendationParams,
): Promise<RecommendationTypes> {
  const res: RecommendationTypes = await request({
    url: `/api/v1/recipe/${params?.uid}/get_ordered_detail/`,
    method: "get",
    params,
  });

  return res;
}
