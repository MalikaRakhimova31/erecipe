import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
  // maintainAspectRatio: false,
  elements: {
    line: {
      tension: 0.6,
      fill: true,
      backgroundColor: "red",
    },
  },
};

export default function CLineGraph(props: {
  values: number[];
  labels: string[];
}): React.ReactElement {
  const { values, labels } = props;

  const data = {
    labels,
    options,
    datasets: [
      {
        maintainAspectRatio: false,
        label: "Рецепты",
        backgroundColor: "#0ABAB5",
        pointRadius: 4,
        pointHoverRadius: 8,
        borderColor: "#0ABAB5",

        data: values,
      },
    ],
  };

  return <Line data={data} options={options} />;
}
