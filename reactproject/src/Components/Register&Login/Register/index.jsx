import React from "react";
import { LogInput } from "../../Common/LogInput";
import { NavLink } from "react-router-dom";
import { LogButton } from "../../Common/LogButton";
import { RegisterTitle } from "../RegisterTitle";

const Register = () => {
  return (
    <div className="w-[1000px] h-[500px] absolute top-[110px] right-[310px] flex">
      <div className="p-4 w-5/6 h-full"></div>
      <div dir="rtl" className="w-2/3 h-full pr-12 pt-16">
        <RegisterTitle log="وارد شوید." text="حساب کاربری دارید؟"/>
        <div className="pt-6">
            <LogInput name="name" placeholder="نام" />
            <LogInput name="name" placeholder="شماره تماس" />
            <LogInput name="name" placeholder="رمز عبور" />
        </div>
        <div>
            <LogButton text="ادامه" nextroute="/register/recievecode"/>
        </div>
        
      </div>
    </div>
  );
};

export { Register };
