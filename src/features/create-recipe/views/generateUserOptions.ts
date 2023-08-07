/* eslint-disable @typescript-eslint/restrict-template-expressions */
export default function generateUserOptions(results: any[]): any[] | null {
  if (results !== null) {
    return results.map((result) => ({
      value: result.id,
      label: `${result.nnuzb}/${result.ppn}${result.tppn}`,
    }));
  }
  return null;
}
