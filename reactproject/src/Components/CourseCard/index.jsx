import React from "react";
import course from "../../assets/images/landing/course.svg";

const Card = () => {
  return (
    <div className="w-72 h-[430px] bg-white rounded-3xl">
      <div className="flex justify-center relative bottom-10">
        <img src={course} className="w-64"/>
      </div>
      <div dir="rtl" className="px-5 relative bottom-6">
        <h1 className="text-cool_blue text-xl font-bold pb-3">آموزش پیشرفته وردپرس</h1>
        <p className="text-sm text-justify text-dusty_blue font-bold mt-2">
          در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری
          آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.
        </p>
        <h4 className="text-xs text-ocean_blue font-bold mt-8"><span className="text-2xl pl-2">.</span>استاد موذن زاده</h4>
      </div>
      <div className="border-t-2 mx-5 mt-4 flex">
        <span className="text-ocean_blue font-bold pt-2 block">!رایگان</span>
        <div className="w-20 h-5 text-white rounded-xl bg-[#adadad] mt-3 ml-[125px] pl-2"></div>
      </div>
    </div>
  );
};

export { Card };
