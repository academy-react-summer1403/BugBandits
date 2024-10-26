import React from "react";
import dashboard from "./../../../assets/images/icons/profiledashboard.svg";
import courses from "./../../../assets/images/icons/profilecourses.svg";
import ticket from "./../../../assets/images/icons/profileticket.svg";
import user from "./../../../assets/images/icons/profileuser.svg";
import exit from "./../../../assets/images/icons/profilelogout.svg";

const ProfileModal = ({ onClose }) => {
  return (
    <div className="w-80 h-[395px] absolute top-20 left-32 bg-white z-50 rounded-r-3xl rounded-b-3xl px-6">
      <div className="w-full h-1/5 flex flex-row pt-3">
        <div className="w-14 h-14 bg-slate-500 rounded-full ">
          <img />
        </div>
        <div className="w-40 h-full flex flex-col pr-4">
          <span className="text-ocean_blue font-bold">صبا اسلامی</span>
          <span className="text-cool_blue text-xs font-bold pt-1">موجودی:</span>
        </div>
      </div>
      <div className="w-full h-3/5 border-t border-[1d1d1d] pt-7">
        <div className="flex flex-row mb-7 cursor-pointer">
          <img src={dashboard} />
          <span className="pr-3 text-cool_blue text-xs font-bold">داشبورد</span>
        </div>
        <div className="flex flex-row mb-7 cursor-pointer">
          <img src={courses} />
          <span className="pr-3 text-cool_blue text-xs font-bold">دوره ها</span>
        </div>
        <div className="flex flex-row mb-7 cursor-pointer">
          <img src={ticket} />
          <span className="pr-3 text-cool_blue text-xs font-bold">تیکت ها</span>
        </div>
        <div className="flex flex-row mb-7 cursor-pointer">
          <img src={user} />
          <span className="pr-3 text-cool_blue text-xs font-bold">
            پروفایل کاربری
          </span>
        </div>
      </div>
      <div className="w-full h-1/5 border-t flex flex-row justify-center pt-8 cursor-pointer">
        <img src={exit} className="w-3 h-3" />
        <span className="text-cool_blue text-xs font-bold relative right-2 bottom-1">
          خروج از حساب
        </span>
      </div>
    </div>
  );
};

export { ProfileModal };
