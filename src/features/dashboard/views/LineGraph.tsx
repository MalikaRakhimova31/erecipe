import Chart from "react-apexcharts";
import { type ApexOptions } from "apexcharts";

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
      height: 350,
      type: "line",
      width: "full",
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
    yaxis: {
      title: {
        text: "Sales",
      },
    },
    stroke: {
      curve: "smooth",
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
      width="100%"
    />
  );
}
