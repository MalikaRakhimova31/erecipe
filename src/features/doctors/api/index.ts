/* eslint-disable import/prefer-default-export */
import request from "@/utils/axios";
import { type ListResponse } from "@/types";
import type { DoctorParam, DoctorTypes, RoleParams, RoleTypes } from "../types";

export async function getDoctors(
  params?: DoctorParam,
): Promise<ListResponse<DoctorTypes[]>> {
  const res: ListResponse<DoctorTypes[]> = await request({
    url: "/api/v1/account/users/doctor_list/",
    method: "get",
    params,
  });

  return res;
}
export async function getPractitionerRoles(
  params?: RoleParams,
): Promise<ListResponse<RoleTypes[]>> {
  const res: ListResponse<RoleTypes[]> = await request({
    url: "/api/v1/ssv/practitioner-roles/",
    method: "get",
    params,
  });

  return res;
}
