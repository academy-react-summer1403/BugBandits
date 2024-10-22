import React from "react";
import logo from "./../../../assets/images/logo/logo.png";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbUserEdit } from "react-icons/tb";
import { RxExit } from "react-icons/rx";
import { PiHouse } from "react-icons/pi";
import { PiGraduationCap } from "react-icons/pi";
import { VscComment } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { useSelector } from "react-redux";

const AsideBard = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  return (
    <div dir="rtl" className={`${darkMode ? "dark" : ""} w-1/4 h-auto`}>
      <div className="pr-20">
        <div className="flex">
          <img src={logo} alt="" className="w-9 h-9" />
          <h1 className="text-3xl text-cool_blue pr-2 font-bold dark:text-blue-100">
            آکادمی سپهر
          </h1>
        </div>
        <List className="pt-8 flex flex-col gap-6 font-iranSans">
          <NavLink to="/panel">
            <ListItem className="w-44 flex text-[#8d8d8d] cursor-pointer">
              <ListItemPrefix>
                <PiHouse className="text-2xl" />
              </ListItemPrefix>
              <h1 className="pr-2 whi text-lg hover:text-ocean_blue">
                پیشخوان
              </h1>
            </ListItem>
          </NavLink>
          <NavLink to="/panel/mycourses">
            <ListItem className="w-44 flex text-[#8d8d8d] cursor-pointer">
              <ListItemPrefix>
                <PiGraduationCap className="text-2xl" />
              </ListItemPrefix>
              <h1 className="pr-2 whi text-lg hover:text-ocean_blue">
                دوره های من
              </h1>
            </ListItem>
          </NavLink>
          <NavLink to="/panel/favorite">
            <ListItem className="w-44 flex text-[#8d8d8d] cursor-pointer">
              <ListItemPrefix>
                <MdOutlineFavoriteBorder className="text-2xl" />
              </ListItemPrefix>
              <h1 className="pr-2 whi text-lg hover:text-ocean_blue">
                علاقه مندی
              </h1>
            </ListItem>
          </NavLink>
          <NavLink to="/panel/mysuggestion">
            <ListItem className="w-44 flex text-[#8d8d8d] cursor-pointer">
              <ListItemPrefix>
                <VscComment className="text-2xl" />
              </ListItemPrefix>
              <h1 className="pr-2 whi text-lg hover:text-ocean_blue">
                نظرات من
              </h1>
            </ListItem>
          </NavLink>
          <NavLink to="/panel/editprofile">
            <ListItem className="w-44 flex text-[#8d8d8d] cursor-pointer">
              <ListItemPrefix>
                <TbUserEdit className="text-2xl" />
              </ListItemPrefix>
              <h1 className="pr-2 whi text-lg hover:text-ocean_blue whitespace-nowrap">
                ویرایش پروفایل
              </h1>
            </ListItem>
          </NavLink>
          <NavLink>
            <ListItem className="w-44 flex text-[#8d8d8d] cursor-pointer">
              <ListItemPrefix>
                <RxExit className="text-2xl" />
              </ListItemPrefix>
              <span className="pr-2 whi text-lg hover:text-ocean_blue">
                خروج
              </span>
            </ListItem>
          </NavLink>
        </List>
      </div>
    </div>
  );
};

export { AsideBard };
