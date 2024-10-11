import React from "react";
import course from "../../assets/images/landing/course.svg";
import { useSelector } from "react-redux";

const Card = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  return (
    <div className={`${darkMode && "dark"} mb-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[430px] bg-white rounded-3xl dark:bg-midnight_blue`}>
      <div className="flex justify-center relative bottom-10">
        <img src={course} className="w-64 md:w-72 lg:w-64"/>
      </div>
      <div dir="rtl" className="px-5 relative bottom-6">
        <h1 className="text-cool_blue text-lg sm:text-xl font-bold pb-3 dark:text-cloud_grey">آموزش پیشرفته وردپرس</h1>
        <p className="text-sm text-justify text-dusty_blue font-bold mt-2 dark:text-cloud_grey">
          در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری
          آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.
        </p>
        <h4 className="text-xs sm:text-sm text-ocean_blue font-bold mt-8 dark:text-cloud_grey"><span className="text-2xl pl-2 ">.</span>استاد موذن زاده</h4>
      </div>
      <div className="border-t-2 mx-5 mt-4 flex border gap-40">
        {/* <div>
          <span className="text-ocean_blue font-bold pt-2 block dark:text-cloud_grey whitespace-nowrap">!رایگان</span>
        </div>
        <div className="w-1/4 h-5 text-white rounded-xl bg-[#adadad] mt-3 pl-2"></div> */}
      </div>
    </div>
  );
};

export { Card };
