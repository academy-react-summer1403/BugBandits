import React from "react";
import { Avatar } from "@material-tailwind/react";
import { HiPlusCircle } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileCard = ({ currentPictureAddress }) => {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } w-32 h-32 bg-soft_grey dark:bg-blue-200 rounded-full relative flex flex-col justify-center items-center`}
    >
      <Avatar
        src={
          currentPictureAddress ||
          "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        }
        // alt="User Avatar"
        size="xxl"
      />
      <NavLink to="/panel/editprofile">
        <HiPlusCircle className="text-ocean_blue w-8 h-8 absolute top-24 right-5 cursor-pointer bg-soft_grey rounded-full" />
      </NavLink>
    </div>
  );
};

export { ProfileCard };
