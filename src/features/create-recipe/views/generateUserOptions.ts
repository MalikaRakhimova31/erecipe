export default function generateUserOptions(results: any[]) {
  if (results) {
    return results.map((result) => {
      return {
        value: result.id,
        label: `${result.nnuzb}/${result.ppn}${result.tppn}`,
      };
    });
  } else return null;
}
