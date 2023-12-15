/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @tanstack/query/prefer-query-object-syntax */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/promise-function-async */
import request from "@/utils/axios";
import { type MutationType } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";

interface SuccessResponse {}

interface ErrorResponse {}

interface QueryType {
  queryParams?: any;
  open?: boolean;
  id?: any;
}

const createRecipeService = {
  getUserById: (queryParams: any) =>
    request.post("/api/v1/ssv/search-patient/", { ...queryParams }),
  getRecipeId: (queryParams: any) =>
    request.post("/api/v1/recipe/", { ...queryParams }),
  sendRecipeItem: (queryParams: any) =>
    request.post(
      `/api/v1/recipe/${queryParams.id}/create_items/`,
      queryParams.data,
    ),
  getAllUsers: (queryParams: any) =>
    request.get("/api/v1/ssv/patients/", {
      params: {
        ...queryParams,
      },
    }),
  getPatientRecipes: (queryParams: any) =>
    request.get(`/api/v1/recipe/`, {
      params: queryParams,
    }),
  getPatientRecipeItem: (queryParams: any, id: string) =>
    request.get(`/api/v1/recipe/${id}`, {
      params: queryParams,
    }),
  getRecipeUnits: () => request.get("/api/v1/units/"),
  getRecipeMethods: () => request.get("/api/v1/methods/"),
  getRecipeMNN: () => request.get("/api/v1/ssv/mnn/"),
  getRecipeDrug: () => request.get("/api/v1/ssv/drug/"),
};

export const UseGetPatientRecipes = ({ queryParams, open }: QueryType): any => {
  return useQuery({
    queryKey: ["GET_PATIENT_RECIPES", queryParams],
    queryFn: () =>
      createRecipeService.getPatientRecipes(queryParams).then((res) => {
        return res;
      }),
    enabled: !!(open ?? false),
    cacheTime: 0,
  });
};
export const UseGetPatientRecipeItems = ({
  id,
  queryParams,
  open,
}: QueryType): any => {
  return useQuery({
    queryKey: ["GET_PATIENT_RECIPE_ITEMS", queryParams, id],
    queryFn: () =>
      createRecipeService.getPatientRecipeItem(queryParams, id).then((res) => {
        return res;
      }),
    enabled: !!(open ?? false),
    cacheTime: 0,
  });
};

export const UseGetUserById = <T extends string>(
  mutationSettings: MutationType,
) => {
  return useMutation<SuccessResponse, ErrorResponse, Record<T, any>>(
    (data) => createRecipeService.getUserById(data),
    mutationSettings,
  );
};
export const UseGetRecipeId = <T extends string>(
  mutationSettings: MutationType,
) => {
  return useMutation<SuccessResponse, ErrorResponse, Record<T, any>>(
    (data) => createRecipeService.getRecipeId(data),
    mutationSettings,
  );
};
export const UseSendRecipeItems = <T extends string>(
  mutationSettings: MutationType,
) => {
  return useMutation<SuccessResponse, ErrorResponse, Record<T, any>>(
    (data) => createRecipeService.sendRecipeItem(data),
    mutationSettings,
  );
};

export const UseGetAllUsers = ({ queryParams, open }: QueryType): any => {
  return useQuery({
    queryKey: ["GET_ALL_PATIENTS", queryParams],
    queryFn: () =>
      createRecipeService.getAllUsers(queryParams).then((res) => {
        return res;
      }),
    enabled: !!(open ?? false),
  });
};

export const UseGetRecipeUnits = (open: boolean): any => {
  return useQuery({
    queryKey: ["GET_RECIPE_UNITS"],
    queryFn: () =>
      createRecipeService.getRecipeUnits().then((res) => {
        return res;
      }),
    enabled: !!(open ?? false),
  });
};
export const UseGetRecipeMethods = (open: boolean): any => {
  return useQuery({
    queryKey: ["GET_RECIPE_METHODS"],
    queryFn: () =>
      createRecipeService.getRecipeMethods().then((res) => {
        return res;
      }),
    enabled: !!(open ?? false),
  });
};
export const UseGetRecipeMNN = (open: boolean): any => {
  return useQuery({
    queryKey: ["GET_RECIPE_MNN_LIST"],
    queryFn: () =>
      createRecipeService.getRecipeMNN().then((res) => {
        return res;
      }),
    enabled: !!(open ?? false),
  });
};
export const UseGetRecipeDrug = (open: boolean): any => {
  return useQuery({
    queryKey: ["GET_RECIPE_DRUG_LIST"],
    queryFn: () =>
      createRecipeService.getRecipeDrug().then((res) => {
        return res;
      }),
    enabled: !!(open ?? false),
  });
};
