import React from "react";
import logo from "./../../../assets/images/logo/logo.png";
import { PiGraduationCapLight } from "react-icons/pi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbUserEdit } from "react-icons/tb";
import { RxExit } from "react-icons/rx";
import { PiHouseLight } from "react-icons/pi";
import { PiHouse } from "react-icons/pi";
import { PiGraduationCap } from "react-icons/pi";

const AsideBard = () => {
  return (
    <div dir="rtl" className="w-1/5 h-auto">
      <div className="pr-20">
        <div className="flex">
          <img src={logo} alt="" className="w-9 h-9" />
          <h1 className="text-3xl text-cool_blue pr-2 font-bold">
            آکادمی سپهر
          </h1>
        </div>
        <div className="pt-8 flex flex-col gap-6">
          <div className="w-44 flex text-[#8d8d8d] cursor-pointer">
            <PiHouse className="text-2xl" />
            <span className="pr-2 whi text-lg hover:text-ocean_blue">
              پیشخوان
            </span>
          </div>
          <div className="w-44 flex text-[#8d8d8d] cursor-pointer">
            <PiGraduationCap className="text-2xl" />
            <span className="pr-2 whi text-lg hover:text-ocean_blue">
              دوره های من
            </span>
          </div>
          <div className="w-44 flex text-[#8d8d8d] cursor-pointer">
            <MdOutlineFavoriteBorder className="text-2xl" />
            <span className="pr-2 whi text-lg hover:text-ocean_blue">
              علاقه مندی
            </span>
          </div>
          <div className="w-44 flex text-[#8d8d8d] cursor-pointer">
            <TbUserEdit className="text-2xl" />
            <span className="pr-2 whi text-lg hover:text-ocean_blue">
              ویرایش پروفایل
            </span>
          </div>
          <div className="w-44 flex text-[#8d8d8d] cursor-pointer">
            <RxExit className="text-2xl" />
            <span className="pr-2 whi text-lg hover:text-ocean_blue">خروج</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AsideBard };
