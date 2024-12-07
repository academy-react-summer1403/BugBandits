import React, { Fragment, useState } from "react";
import {
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "./../../../assets/images/logo/logo.png";
import { LuX } from "react-icons/lu";
import { MdChevronLeft } from "react-icons/md";

const DrawerPlacement = () => {
  const [openRight, setOpenRight] = useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const menuItems = [
    { label: "پیشخوان", path: "/panel" },
    { label: "دوره های من", path: "/panel/mycourses" },
    { label: "علاقه مندی ها", path: "/panel/favorite" },
    { label: "ویرایش پروفایل", path: "/panel/editprofile" },
    { label: "خروج", path: "/" },
  ];

  return (
    <Fragment>
      <div className="flex sm:hidden absolute right-8 top-[72px] w-10 h-10 z-50">
        <IconButton variant="text" onClick={openDrawerRight}>
          <IoMenu className="w-10 h-10 text-ocean_blue dark:text-white" />
        </IconButton>
      </div>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4 sm:hidden dark:bg-midnight_blue"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography
            variant="h5"
            color="blue-gray"
            className="flex flex-row text-ocean_blue dark:text-white font-iranSans"
          >
            <img src={logo} className="w-10 h-10" alt="logo" />
            <h1 className="mt-2 mr-2 dark:text-white">آکادمی سپهر</h1>
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <LuX className="w-6 h-6 dark:text-white" />
          </IconButton>
        </div>
        <List className="font-iranSans">
          {menuItems.map((item, index) => (
            <ListItem key={index}>
              <NavLink
                to={item.path}
                className="flex items-center justify-between w-full dark:text-white"
                onClick={closeDrawerRight}
              >
                {item.label}
                <IconButton variant="text" className="-ml-4">
                  <MdChevronLeft className="w-5 h-5 text-ocean_blue" />
                </IconButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Fragment>
  );
};

export { DrawerPlacement };
