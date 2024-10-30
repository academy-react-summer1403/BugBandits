import React from "react";
import { useSelector } from "react-redux";

const SkeletonCard = () => {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <div
      className={`${
        darkMode && "dark"
      } animate-pulse w-72 h-[400px] mb-16 bg-white rounded-3xl dark:bg-midnight_blue`}
    >
      <div className="w-full h-44 flex justify-center relative bottom-10 ">
        <img className="rounded-xl w-64 h-full bg-slate_light dark:bg-slate_dark" />
      </div>
      <div dir="rtl" className="w-full h-auto px-5 relative bottom-10">
        <div className="w-32 h-10 bg-slate_light my-5 rounded-2xl dark:bg-slate_dark"></div>
        <div className="h-24 mb-5 bg-slate_light dark:bg-slate_dark rounded-2xl"></div>
        <div className="w-full h-10 bg-slate_light dark:bg-slate_dark rounded-2xl"></div>
        <div className=" flex flex-row">
          <div className="w-1/2  bg-slate_light dark:bg-slate_dark rounded-2xl"></div>
          <div className="w-1/2 bg-slate_light dark:bg-slate_dark rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export { SkeletonCard };
