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

const labels = ["January", "February", "March", "April", "May", "June"];
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

export default function CLineGraph(): React.ReactElement {
  const data = {
    labels,
    options,
    datasets: [
      {
        maintainAspectRatio: false,
        label: "false",
        backgroundColor: "#0ABAB5",
        pointRadius: 4,
        pointHoverRadius: 8,
        borderColor: "#0ABAB5",

        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  return <Line data={data} options={options} />;
}
