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
import { DrawerPlacement } from "../AsideBarDrawer";

const AsideBard = () => {
  const barItems = [
    { title: "پیشخوان", route: "/panel", icon: <PiHouse />, exact: true },
    {
      title: "دوره های من",
      route: "/panel/mycourses",
      icon: <PiGraduationCap />,
    },
    {
      title: "علاقه مندی",
      route: "/panel/favorite",
      icon: <MdOutlineFavoriteBorder />,
    },
    {
      title: " ویرایش پروفایل",
      route: "/panel/editprofile",
      icon: <TbUserEdit />,
    },
    { title: "خروج", route: "/", icon: <RxExit />, exact: true },
  ];
  const darkMode = useSelector((state) => state.darkMode.value);
  return (
    <div dir="rtl" className={`${darkMode ? "dark" : ""} w-1/4 h-auto`}>
      <div className="lg:pr-20 sm:pr-10 hidden sm:block">
        <div className="flex">
          <img src={logo} alt="" className="w-9 h-9" />
          <h1 className="md:text-3xl text-2xl text-cool_blue pr-2 font-bold dark:text-blue-100 whitespace-nowrap">
            آکادمی سپهر
          </h1>
        </div>
        <List className="pt-8 flex flex-col gap-6 font-iranSans">
          {barItems.map((item) => (
            <NavLink
              to={item.route}
              key={item.route}
              end={item.exact}
              className={({ isActive }) =>
                ` cursor-pointer ${
                  isActive
                    ? "text-ocean_blue font-bold dark:text-light-blue-100"
                    : " text-[#8d8d8d] dark:text-white"
                }`
              }
            >
              <ListItem className="w-48 flex cursor-pointer">
                <ListItemPrefix className="text-2xl">
                  {item.icon}
                </ListItemPrefix>
                <h1 className=" pr-2 text-lg whitespace-nowrap">
                  {item.title}
                </h1>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </div>
      <DrawerPlacement />
    </div>
  );
};

export { AsideBard };
