import request from "@/utils/axios";
import type { ListResponse } from "@/types";
import type {
  Organizations,
  OrganizationsParams,
  Patient,
  PatientStatsParams,
  PatientStatsTypes,
  PatientsParams,
  PractitionerCountTypes,
  RecipeStatDateParams,
  RecipeStatsParams,
} from "../types";

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
export async function getPatientsStats(
  params?: PatientStatsParams,
): Promise<PatientStatsTypes> {
  const res: PatientStatsTypes = await request({
    url: "/api/v1/ssv/patients/patient_statistics/",
    method: "get",
    params,
  });

  return res;
}
export async function getOrganizations(
  params?: OrganizationsParams,
): Promise<ListResponse<Organizations[]>> {
  const res: ListResponse<Organizations[]> = await request({
    url: "/api/v1/ssv/organizations/",
    method: "get",
    params,
  });

  return res;
}
export async function getPractitionerCount(): Promise<
  ListResponse<PractitionerCountTypes>
> {
  const res: ListResponse<PractitionerCountTypes> = await request({
    url: "/api/v1/ssv/organizations/get_practitioner_count/",
    method: "get",
  });

  return res;
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

export async function getRecipeStats(params?: RecipeStatsParams): Promise<{
  current: 0;
  total: 0;
  data: Array<{
    status: "expired" | "done" | "new";
    count: number;
    percent: number;
  }>;
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
