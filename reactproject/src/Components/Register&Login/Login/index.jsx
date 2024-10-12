import React from "react";
import { LoginTitle } from "../LoginTitle";
import { LogInput } from "../../Common/LogInput";
import { LogButton } from "../../Common/LogButton";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-[1000px] h-[500px] absolute top-[110px] right-[310px] flex">
      <div className="p-4 w-5/6 h-full"></div>
      <div dir="rtl" className="w-2/3 h-full pr-12 pt-16">
        <LoginTitle text="حساب کاربری ندارید؟" log="ثبت نام کنید." title="ورود با موبایل" />
        <div className="mt-5">
          <LogInput placeholder="شماره موبایل" />
        </div>
        <div>
          <LogButton text="ادامه" nextroute="/login/recievecodelog" />
        </div>
        <div className="flex flex-row text-xs text-[#8d8d8d] gap-40 pt-1">
          <NavLink to="/login/emaillogin" className="cursor-pointer">ورود با ایمیل</NavLink>
          <NavLink to="/login/forgetpassword" className="cursor-pointer">فراموشی رمز</NavLink>
        </div>
        <div>
          <h3></h3>
        </div>
      </div>
    </div>
  );
};

export { Login };
