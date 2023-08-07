/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @tanstack/query/prefer-query-object-syntax */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/promise-function-async */
import request from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";

interface QueryType {
  queryParams: any;
  open?: boolean;
  id?: any;
}

const createRecipeService = {
  getSingleRecipe: (queryParams: any) =>
    request.get("/api/v1/recipe_item/", {
      params: {
        ...queryParams,
      },
    }),
  getRecipeItem: (id: any) => request.get(`/api/v1/recipe/${id}/`),
};

export const UseGetSingleRecipe = ({ queryParams }: QueryType): any => {
  return useQuery({
    queryKey: ["GET_RECIPE_ITEM", queryParams],
    queryFn: () =>
      createRecipeService.getSingleRecipe(queryParams).then((res) => {
        return res;
      }),
    // enabled: !!(open ?? false),
  });
};

export const UseGetRecipeItem = ({ id, open }: QueryType): any => {
  return useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["GET_RECIPE_ITEM"],
    queryFn: () =>
      createRecipeService.getRecipeItem(id).then((res) => {
        return res;
      }),
    enabled: !!(open ?? false),
    cacheTime: 0,
  });
};
