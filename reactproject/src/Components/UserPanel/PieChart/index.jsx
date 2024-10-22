import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const BasicPie = () => {
  return (
    <div className="border text-cool_blue place-items-center relative left-12">
      <PieChart
        series={[
          {
            data: [
              {
                id: 0,
                value: 10,
                label: "تکمیل شده",
                labelStyle: { color: "#ffffff" },
              },
              { id: 1, value: 15, label: "درحال برگزاری" },
              { id: 2, value: 20, label: "حذف شده" },
            ],
          },
        ]}
        width={700}
        height={300}
        colors={["#A8DADC", "#457B9D", "#1D3557"]}
      />
    </div>
  );
};

export { BasicPie };
