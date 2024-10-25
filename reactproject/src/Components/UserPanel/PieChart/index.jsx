import React from "react";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import Chart from "react-apexcharts";

const chartConfig = {
  type: "pie",
  width: 280,
  height: 280,
  series: [44, 55, 13],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#0077b6", "#00b4d8", "#90e0ef", "#caf0f8", "#669bbc"],
    legend: {
      show: false,
    },
    tooltip: {
      enabled: true,
      formatter: function (val) {
        return `Value: ${val}`;
      },
    },
  },
};

const ChartPie = () => {
  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      ></CardHeader>
      <CardBody className="mt-4 grid place-items-center px-2">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
};

export { ChartPie };
