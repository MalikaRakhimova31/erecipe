import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 2, 20, 15],
      backgroundColor: ["#2097F6", "#FF4E4E", "#0ABAB5", "#9B51E0"],
      borderColor: ["#2097F6", "#FF4E4E", "#0ABAB5", "#9B51E0"],
      borderWidth: 1,
    },
  ],
};

const options = {
  cutout: 170,
  cutoutPercentage: 80,
  maintainAspectRatio: true,
  aspectRatio: 1,
};

function DoughnutChart(): React.ReactElement {
  return <Doughnut data={data} options={options} id="myDonut" />;
}
export default DoughnutChart;
