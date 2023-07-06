import Chart from "react-apexcharts";
import "./styles.scss";
import chartData from "./chartOptions";

export default function LineGraph(): React.ReactElement {
  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="line"
      height={245}
    />
  );
}
