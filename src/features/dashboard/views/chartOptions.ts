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
      data: [0, 200, 300, 400, 500, 600, 700, 800],
    },
  ],
  options: {
    chart: {
      id: "line-graph",
      height: 30,
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
      labels: {
        style: {
          colors: "#8E93AA",
          fontFamily: "inherit",
          fontSize: "12px",
          fontWeight: "400",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: ["#8E93AA"],
          fontFamily: "inherit",
          fontSize: "12px",
          fontWeight: "400",
        },
      },
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },

    colors: ["#0ABAB5"],
    tooltip: {
      shared: true,
      style: {
        fontSize: "12px",
        fontFamily: "inherit",
      },
    },
  },
};

export default chartData;
