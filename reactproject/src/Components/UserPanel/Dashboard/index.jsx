import React from "react";
import { HoverButtons } from "../HoverButtons";
import { PanelHeader } from "../PanelHeader";
import { useSelector } from "react-redux";
import { ProfileCard } from "../ProfileCard";
import { ChartPie } from "../PieChart";
import { ProfileProgress } from "../Progress";
import { DashboardCard } from "../DashboardCard";

const Dashboard = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  return (
    <div className={`${darkMode ? "dark" : ""} w-11/12 h-auto flex flex-col`}>
      <div className="w-full h-14 mr-20">
        <PanelHeader />
      </div>
      <div className="w-5/6 h-auto pb-9 bg-white dark:bg-midnight_blue mx-20 rounded-3xl flex  ">
        <div className=" w-auto h-80 m-10 border rounded-md p-5 flex flex-col gap-2  items-center">
          <ProfileCard />
          <h1 className=" whitespace-nowrap text-xl mt-10 text-ocean_blue">
            صبا اسلامی خوش آمدید.
          </h1>
          <h1 className="text-ocean_blue text-xl whitespace-nowrap font-kalamehNum">
            تلفن همراه : 09339294953
          </h1>
          <h1 className="text-ocean_blue text-xl whitespace-nowrap">
            آدرس ایمیل : sabaeslami@gmail.com
          </h1>
        </div>
        <div>
          <div>
            <HoverButtons />
          </div>
          <div
            dir="ltr"
            className="w-[482px] mt-10 pt-4 border flex justify-center items-center rounded-md"
          >
            <ProfileProgress />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
