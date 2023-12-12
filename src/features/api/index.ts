/* eslint-disable import/prefer-default-export */
import request from "@/utils/axios";
import type {
  ListResponse,
  RegionTypes,
  RegionsParams,
  RegionChildrenTypes,
} from "@/types";

export async function getRegions(
  params?: RegionsParams,
): Promise<ListResponse<RegionTypes[]>> {
  const res: ListResponse<RegionTypes[]> = await request({
    url: "/api/v1/regions/",
    method: "get",
    params,
  });

  return res;
}

export async function getRegionsById(
  params?: RegionsParams,
): Promise<RegionChildrenTypes> {
  const res: RegionChildrenTypes = await request({
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    url: `/api/v1/regions/${params?.id}/`,
    method: "get",
    params,
  });

  return res;
}
