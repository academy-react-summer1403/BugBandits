import React from "react";
import course from "./../../../assets/images/landing/course.svg";
import { HiOutlineUser } from "react-icons/hi";

const MyCoursesCard = () => {
  return (
    <div className="w-[45%] h-56 bg-white rounded-xl shadow-sm sm:flex ">
      <div className=" w-64">
        <img
          className="w-full rounded-2xl relative top-5 -right-5"
          src={course}
          alt="Card Image"
        />
      </div>
      <div className="w-96 flex flex-wrap">
        <div className="p-4 flex flex-col h-auto sm:p-7">
          <h3 className="text-lg whitespace-nowrap font-bold text-cool_blue dark:text-white">
            آموزش پیشرفته وردپرس
          </h3>
          <div className="mt-3 text-ocean_blue text-sm">
            <span>شروع دوره : </span>
            <span className="font-kalamehNum pr-2">1403/5/15</span>
          </div>
          <div className="mt-3 text-ocean_blue text-sm">
            <span>استاد دوره : </span>
            <span className="pr-2">اقای محمد حسینی</span>
          </div>
          <div className="mt-4">
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
              تایید شده
            </span>
          </div>
          <div className="relative">
            <div className="mb-2 flex justify-between items-center">
              {/* <h3 className="text-sm text-ocean_blue dark:text-white">
                  پیشرفت دوره
                </h3> */}
              {/* <span className="text-sm text-gray-800 dark:text-white">75%</span> */}
            </div>
            <div
              className="flex absolute top-7 -right-52 w-[455px] h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="w-1/2 flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                // style={{width: 100}}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MyCoursesCard };
