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
  queryParams: any;
  open?: boolean;
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
  getAllUsers: () => request.get("/api/v1/ssv/patients/"),
  getPatientRecipes: (queryParams: any) =>
    request.get("/api/v1/recipe/", { ...queryParams }),
  getRecipeUnits: () => request.get("/api/v1/units/"),
  getRecipeMethods: () => request.get("/api/v1/methods/"),
  getRecipeMNN: () => request.get("/api/v1/ssv/mnn/"),
};

export const UseGetPatientRecipes = ({ queryParams, open }: QueryType): any => {
  return useQuery({
    queryKey: ["GET_PATIENT_RECIPES", queryParams],
    queryFn: () =>
      createRecipeService.getPatientRecipes(queryParams).then((res) => {
        return res;
      }),
    enabled: !!(open ?? false),
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

export const UseGetAllUsers = (): any => {
  return useQuery({
    queryKey: ["GET_ALL_USERS"],
    queryFn: () =>
      createRecipeService.getAllUsers().then((res) => {
        return res;
      }),
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
