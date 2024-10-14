import React from "react";
import bg from "./../../assets/images/coursedetail/herosectionbg.svg";
import courseimg from "./../../assets/images/coursedetail/courseimg.svg"

const CourseDetail = () => {
  return (
    <div className="w-5/6 h-full flex flex-col m-auto mt-20">
      <div
        className="grid grid-rows-3 grid-flow-col rounded-xl w-full h-72 bg-cover bg-center relative bg-black bg-opacity-70 shadow-lg"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-xl backdrop-blur-sm shadow-lg bg-gradient-to-bl from-black/70 to-transparent"></div>
        <div class="row-span-3 w-96 justify-center z-50">
            <img src={courseimg} alt="not found" className="w-96 h-96 absolute -top-12 -left-6"/>
        </div>
        <div dir="rtl" class="col-span-2 w-full h-44 p-14 z-50">
            <h1 className="text-white font-bold text-3xl whitespace-nowrap">آموزش کاربردی RestFul API در لاراول</h1>
            <p className="text-[#acacac] w-[460px] text-right mt-3">در دوره آموزشی RESTful API در لاراول شیوه پیاده‌سازی REST API در پروژه‌های لاراولی را به صورت عملی و کاربردی (براساس نیاز بازار کار) یاد خواهید گرفت.</p>
        </div>
        <div dir="rtl" class="border row-span-2 col-span-2 w-full h-20 mt-32 pr-14 z-50 border-yellow-500 ">
            <div className="flex flex-row gap-60 border">
                <div className="w-32 h-12 rounded-lg bg-ocean_blue justify-center text-white font-bold"><h1 className="">خرید دوره</h1></div>
                <div className="text-white">
                    <h1>454545 تومان</h1>
                </div>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-6 w-full h-96">
        <div className="col-span-2 border"></div>
        <div className="col-span-4 border"></div>
      </div>
    </div>
  );
};

export { CourseDetail };
