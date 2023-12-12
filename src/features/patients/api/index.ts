/* eslint-disable import/prefer-default-export */
import { type ListResponse } from "@/types";
import request from "@/utils/axios";
import { type PatientTypes, type PatientsParams } from "../types";

export async function getPatients(
  params?: PatientsParams,
): Promise<ListResponse<PatientTypes[]>> {
  const res: ListResponse<PatientTypes[]> = await request({
    url: "/api/v1/ssv/patients/",
    method: "get",
    params,
  });

  return res;
}
