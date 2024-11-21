import React from "react";

const MoreInfo = ({
  cost,
  courseLevelName,
  courseStatusName,
  currentRate,
  startTime,
  endTime,
  capacity,
  currentRegistrants,
}) => {
  return (
    <div className="w-full h-auto bg-white dark:bg-midnight_blue rounded-2xl">
      <div className="flex flex-row p-6 gap-20">
        <div className="w-full text-ocean_blue font-bold whitespace-nowrap text-right">
          <h1>هزینه</h1>
          <h1>سطح دوره </h1>
          <h1>وضعیت دوره </h1>
          <h1>مدت زمان</h1>
          <h1>امتیاز</h1>
          <h1>شروع دوره</h1>
          <h1>پایان دوره</h1>
          <h1>ظرفیت</h1>
          <h1>تعداد شرکت کنندگان</h1>
        </div>
        <div className="w-full text-left text-cool_blue dark:text-[#acacac]">
          <h1 className="font-kalamehNum ">{cost} تومان </h1>
          <h1>{courseLevelName}</h1>
          <h1>{courseStatusName}</h1>
          <h1 className="font-kalamehNum "> 12 ساعت</h1>
          <h1 className="font-kalamehNum ">{currentRate}/5</h1>
          <h1 className="font-kalamehNum ">
            {new Date(startTime).toLocaleDateString("fa-IR")}
          </h1>
          <h1 className="font-kalamehNum ">
            {new Date(endTime).toLocaleDateString("fa-IR")}
          </h1>
          <h1 className="font-kalamehNum ">{capacity}</h1>
          <h1 className="font-kalamehNum ">{currentRegistrants}</h1>
        </div>
      </div>
    </div>
  );
};

export { MoreInfo };
