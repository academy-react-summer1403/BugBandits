import React, { useEffect, useState } from "react";
import dashboard from "./../../../assets/images/icons/profiledashboard.svg";
import exit from "./../../../assets/images/icons/profilelogout.svg";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { getUserInfo } from "../../../Core/Services/api/UserPanel/getuserinfo.api";
import { Spinner } from "@material-tailwind/react";

const ProfileModal = ({ onClose, onLogout }) => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const info = await getUserInfo();
      setUserInfo(info);
    } catch (error) {
      console.error("Failed to fetch user info:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const userImage =
    userInfo.userImage && userInfo.userImage.length > 0
      ? userInfo.userImage[0].puctureAddress.replace(/\\/g, "/")
      : null;

  if (loading) {
    return (
      <div className="w-80 h-40 absolute top-20 left-32 bg-white z-50 rounded-r-3xl rounded-b-3xl flex items-center justify-center">
        <Spinner color="blue" className="w-10 h-10" />
      </div>
    );
  }

  return (
    <div className="w-80 h-auto absolute top-20 left-32 bg-white z-[999] rounded-r-3xl rounded-b-3xl px-6">
      <div className="w-full h-1/5 flex flex-row pt-3">
        <div className="w-14 h-14 bg-slate-500 mb-2 flex items-center justify-center rounded-full">
          {userImage ? (
            <img
              src={userImage}
              alt="User Avatar"
              className="w-14 h-14 rounded-full"
            />
          ) : (
            <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center text-sm">
              <Spinner color="blue" className="w-10 h-10" />
            </div>
          )}
        </div>
        <div className="w-40 h-14 flex flex-col pr-4 justify-center">
          <span className="text-ocean_blue font-bold">
            {userInfo.fName || "کاربر"} {userInfo.lName || ""}
          </span>
        </div>
      </div>
      <div className="w-full h-auto border-t border-[1d1d1d]">
        <NavLink to="/panel">
          <Button
            variant="text"
            className="w-full flex items-center gap-3 pr-3 py-4 text-cool_blue text-xs font-bold font-iranSans"
          >
            <img src={dashboard} alt="Dashboard Icon" />
            پنل دانشجو
          </Button>
        </NavLink>
      </div>
      <div className="w-full h-auto border-t flex flex-row justify-center py-1 cursor-pointer">
        <Button
          onClick={onLogout}
          variant="text"
          className="flex items-center gap-3 text-cool_blue text-xs font-bold font-iranSans"
        >
          <img src={exit} alt="Logout Icon" className="w-3 h-3" />
          خروج از حساب
        </Button>
      </div>
    </div>
  );
};

export { ProfileModal };
