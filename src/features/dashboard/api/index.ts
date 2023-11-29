import request from "@/utils/axios";
import type { BaseParams, ListResponse } from "@/types";

interface Patient {
  id: number;
  uid: string;
  firstname: string;
  lastname: string;
  middlename: string;
  nnuzb: string;
  ppn: string;
  tppn: string;
  bct: string;
  gender: "male" | "female";
  birth_date: string;
  last_visited: string;
}

interface PatientsParams extends BaseParams {
  visited?: string;
  organization?: string;
  region?: string;
  practitioner_role?: string;
  search?: string;
  ordering?: string;
}

export async function getPatients(
  params?: PatientsParams,
): Promise<ListResponse<Patient[]>> {
  const res: ListResponse<Patient[]> = await request({
    url: "/api/v1/ssv/patients/",
    method: "get",
    params,
  });

  return res;
}

interface RecipeList {
  id: number;
  patient: Patient;
  practitioner: string;
  uid: string;
  status: "new" | "done" | "expired";
  created_at: string;
  updated_at: string;
}

interface RecipeStatDateParams extends BaseParams {
  patient?: string;
  practitioner?: string;
  status?: "new" | "done" | "expired";
  region?: string;
  organization?: string;
  search?: string;
  ordering?: string;
  date?: "year" | "month" | "week";
}

export async function getRecipeStatDate(
  params?: RecipeStatDateParams,
): Promise<{
  data: Array<{ item: string; count: number }>;
  this: { item: string; count: number };
}> {
  const res: {
    data: Array<{ item: string; count: number }>;
    this: { item: string; count: number };
  } = await request({
    url: "/api/v1/recipe/recipe_statistic_date/",
    method: "get",
    params,
  });

  return res;
}

interface RecipeStatsParams extends BaseParams {
  patient: string;
  practitioner: string;
  status: "new" | "done" | "expired";
  region: string;
  organization: string;
  search: string;
  ordering: string;
}

export async function getRecipeStats(params?: RecipeStatsParams): Promise<{
  current: 0;
  total: 0;
  data: Array<{ status: "expired" | "done"; count: number; percent: number }>;
}> {
  const res: {
    current: 0;
    total: 0;
    data: Array<{ status: "expired" | "done"; count: number; percent: number }>;
  } = await request({
    url: "/api/v1/recipe/recipe_statistics/",
    method: "get",
    params,
  });

  return res;
}
