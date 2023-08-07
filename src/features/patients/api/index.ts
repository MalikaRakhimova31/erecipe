// /* eslint-disable @typescript-eslint/restrict-template-expressions */
// /* eslint-disable @typescript-eslint/explicit-function-return-type */
// /* eslint-disable @tanstack/query/prefer-query-object-syntax */
// /* eslint-disable @typescript-eslint/no-empty-interface */
// /* eslint-disable arrow-body-style */
// /* eslint-disable import/prefer-default-export */
// /* eslint-disable @typescript-eslint/promise-function-async */
// import request from "@/utils/axios";
// import { type MutationType } from "@/types";
// import { useMutation, useQuery } from "@tanstack/react-query";

// interface SuccessResponse {}

// interface ErrorResponse {}

// interface QueryType {
//   queryParams: any;
//   open?: boolean;
// }

// const createRecipeService = {
//   getAllPatients: () => request.get("/api/v1/ssv/patients/"),
// };

// export const UseGetAllPatients = (): any => {
//   return useQuery({
//     queryKey: ["GET_ALL_PATIENTS"],
//     queryFn: () =>
//       createRecipeService.getAllPatients().then((res) => {
//         return res;
//       }),
//     // enabled: !!(open ?? false),
//   });
// };
