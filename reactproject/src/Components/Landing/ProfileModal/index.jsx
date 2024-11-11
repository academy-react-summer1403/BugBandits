import React, { useEffect, useState } from "react";
import dashboard from "./../../../assets/images/icons/profiledashboard.svg";
import exit from "./../../../assets/images/icons/profilelogout.svg";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { getUserInfo } from "../../../Core/Services/api/UserPanel/getuserinfo.api";

const ProfileModal = ({ onClose, onLogout }) => {
  const handleLogoutClick = () => {
    onLogout();
  };

  const [userInfo, setUserInfo] = useState([]);

  const getData = async () => {
    const info = await getUserInfo();
    console.log("info",info);
    setUserInfo(info);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-80 h-auto absolute top-20 left-32 bg-white z-50 rounded-r-3xl rounded-b-3xl px-6">
      <div className="w-full h-1/5 flex flex-row pt-3 ">
        <div className="w-14 h-14 bg-slate-500 mb-2 ">
          <img src={userInfo.currentPictureAddress} className="w-14 h-14 bg-blue-gray-400 rounded-full" />
        </div>
        <div className="w-40 h-14 flex flex-col pr-4 justify-center ">
          <span className="text-ocean_blue font-bold ">{userInfo.fName} {userInfo.lName}</span>
        </div>
      </div>
      <div className="w-full h-auto border-t border-[1d1d1d]">
        <NavLink to="/panel">
          <Button
            variant="text"
            className="w-full flex items-center gap-3 pr-3 py-4 text-cool_blue text-xs font-bold font-iranSans"
          >
            <img src={dashboard} />
            پنل دانشجو
          </Button>
        </NavLink>
      </div>
      <div className="w-full h-auto border-t flex flex-row justify-center py-1 cursor-pointer">
        <Button
          onClick={handleLogoutClick}
          variant="text"
          className="flex items-center gap-3 text-cool_blue text-xs font-bold font-iranSans"
        >
          <img src={exit} className="w-3 h-3" />
          خروج از حساب
        </Button>
      </div>
    </div>
  );
};

export { ProfileModal };
