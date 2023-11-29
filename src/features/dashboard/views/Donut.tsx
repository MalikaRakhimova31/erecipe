import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  cutout: 120,
  cutoutPercentage: 80,
  maintainAspectRatio: true,
  aspectRatio: 1,
};

export default function DoughnutChart(props: {
  labels: string[];
  values: number[];
}): React.ReactElement {
  const { labels, values } = props;

  const data = {
    labels,
    datasets: [
      {
        label: "# of Votes",
        data: values,
        backgroundColor: ["#2097F6", "#FF4E4E", "#0ABAB5", "#9B51E0"],
        borderColor: ["#2097F6", "#FF4E4E", "#0ABAB5", "#9B51E0"],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} options={options} id="myDonut" />;
}
