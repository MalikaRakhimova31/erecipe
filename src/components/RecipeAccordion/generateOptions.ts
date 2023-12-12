interface IProps {
  id: number;
  code: number;
  name: {
    ru: string;
    uz: string;
    uzc: string;
  };
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function generateMNNOptions(results: IProps[]) {
  if (results.length > 0) {
    return results.map((result: IProps) => ({
      value: `${result.id}`,
      label: result.name.ru,
    }));
  }
  return [];
}
