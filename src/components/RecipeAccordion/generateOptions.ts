export default function generateMNNOptions(results: any[]) {
  if (results.length) {
    return results.map((result: any) => {
      return { value: `${result.id}`, label: result.name_ru };
    });
  }
}
