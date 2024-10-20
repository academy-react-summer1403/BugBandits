import React from "react";
import logo from "./../../../assets/images/logo/logo.png";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbUserEdit } from "react-icons/tb";
import { RxExit } from "react-icons/rx";
import { PiHouse } from "react-icons/pi";
import { PiGraduationCap } from "react-icons/pi";
import { VscComment } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const AsideBard = () => {
  return (
    <div dir="rtl" className="w-1/4 h-auto">
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
            <NavLink
              to="/panel"
              className="pr-2 whi text-lg hover:text-ocean_blue"
            >
              پیشخوان
            </NavLink>
          </div>
          <div className="w-44 flex text-[#8d8d8d] cursor-pointer">
            <PiGraduationCap className="text-2xl" />
            <NavLink
              to="/panel/mycourses"
              className="pr-2 whi text-lg hover:text-ocean_blue"
            >
              دوره های من
            </NavLink>
          </div>
          <div className="w-44 flex text-[#8d8d8d] cursor-pointer">
            <MdOutlineFavoriteBorder className="text-2xl" />
            <NavLink
              to="/panel/favorite"
              className="pr-2 whi text-lg hover:text-ocean_blue"
            >
              علاقه مندی
            </NavLink>
          </div>
          <div className="w-44 flex text-[#8d8d8d] cursor-pointer">
            <VscComment className="text-2xl" />
            <NavLink
              to="/panel/mysuggestion"
              className="pr-2 whi text-lg hover:text-ocean_blue"
            >
              نظرات من
            </NavLink>
          </div>
          <div className="w-44 flex text-[#8d8d8d] cursor-pointer">
            <TbUserEdit className="text-2xl" />
            <NavLink
              to="/panel/editprofile"
              className="pr-2 whi text-lg hover:text-ocean_blue"
            >
              ویرایش پروفایل
            </NavLink>
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
