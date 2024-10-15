import React from "react";
import bg from "./../../../assets/images/coursedetail/herosectionbg.svg";
import courseimg from "./../../../assets/images/coursedetail/courseimg.svg";

const CourseDetailHeader = () => {
  return (
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
        <img
          src={courseimg}
          alt="not found"
          className="w-96 h-96 absolute -top-12 -left-6"
        />
      </div>
      <div dir="rtl" class="col-span-2 w-full h-44 p-14 z-50">
        <h1 className="text-white font-bold text-3xl whitespace-nowrap">
          آموزش کاربردی RestFul API در لاراول
        </h1>
        <p className="text-[#acacac] w-[460px] text-right mt-3">
          در دوره آموزشی RESTful API در لاراول شیوه پیاده‌سازی REST API در
          پروژه‌های لاراولی را به صورت عملی و کاربردی (براساس نیاز بازار کار)
          یاد خواهید گرفت.
        </p>
      </div>
      <div dir="rtl" class="row-span-2 col-span-2 w-full h-20 mt-32 pr-14 z-50">
        <div className="flex flex-row gap-60">
          <div className="w-32 h-12 rounded-lg bg-ocean_blue justify-center text-white font-bold cursor-pointer">
            <h1 className="relative top-2 right-6">خرید دوره</h1>
          </div>
          <div className="text-white">
            <h1 className="font-bold">454545 تومان</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CourseDetailHeader };
