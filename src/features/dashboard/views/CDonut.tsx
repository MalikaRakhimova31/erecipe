import Chart from "react-apexcharts";
import donutOption from "./donutData";

export default function CDonut(): React.ReactElement {
  return (
    <Chart
      options={donutOption.options}
      series={donutOption.series}
      type="donut"
      height={350}
    />
  );
}
