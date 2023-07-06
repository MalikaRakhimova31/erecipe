import Chart from "react-apexcharts";
import { type ApexOptions } from "apexcharts";
import "./styles.scss";

interface seriesProps {
  name: string;
  data: number[];
}

interface Props {
  series: seriesProps[];
  options: ApexOptions;
}
const chartData: Props = {
  series: [
    {
      name: "Sales",
      data: [0, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  ],
  options: {
    chart: {
      id: "line-graph",
      height: 350,
      type: "line",
      width: "100%",
      toolbar: {
        show: false,
      },
    },

    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    yaxis: {},
    stroke: {
      curve: "smooth",
      width: 4,
    },
    colors: ["#0ABAB5"],
    tooltip: {
      shared: true,
    },
  },
};

export default function LineGraph(): React.ReactElement {
  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="line"
      height={350}
    />
  );
}
