import { type ApexOptions } from "apexcharts";

interface Props {
  series: number[];
  options: ApexOptions;
}

const donutOption: Props = {
  series: [44, 55],
  options: {
    chart: {
      id: "donut",
      type: "donut",
      height: "100%",
      toolbar: {
        show: false,
      },
    },
    fill: {
      colors: ["#2097F6", "#FF4E4E"],
    },
    stroke: { width: 4, lineCap: "round" },
    labels: ["Мужчины", "Женщины"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "77%",
          labels: {
            show: true,
            name: {
              show: true,

              offsetY: -10,
              fontWeight: "400",
              formatter: function () {
                return "Общее кол-во";
              },
            },
            value: {
              show: true,
              // fontSize: "18px",
              fontFamily: "inherit",
              fontWeight: 600,
              offsetY: -1,
              formatter: function (val) {
                return val;
              },
            },
            total: {
              show: true,
              showAlways: true,
              fontSize: "12px",
              fontFamily: "inherit",
              color: "#8E93AA",
              fontWeight: 400,
              formatter: function () {
                // const totals = w.globals.seriesTotals;
                // const result = totals.reduce((a: any, b: any) => a + b, 0);
                return (30 / 1000).toFixed(3);
              },
            },
          },
        },
      },
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

export default donutOption;
