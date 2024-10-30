import React from "react";
import { LoginTitle } from "../LoginTitle";
import { LogButton } from "../../Common/LogButton";
import VerificationInput from "react-verification-input";
import { NavLink } from "react-router-dom";

const LoginCode = () => {
  return (
    <div className="w-[920px] h-[500px] absolute top-[110px] right-[310px] flex">
      <div className="p-4 w-5/6 h-full"></div>
      <div className="w-2/3 h-full pr-12 pt-16">
        <div dir="rtl">
          <LoginTitle text="حساب کاربری ندارید؟" log="ثبت نام کنید." />
        </div>
        <div className="my-5">
          <VerificationInput
            classNames={{
              container: "container",
              character: "character",
              characterInactive: "character--inactive",
              characterSelected: "character--selected",
              characterFilled: "character--filled",
            }}
            validChars="0-9"
            placeholder=""
            length={4}
          />
        </div>
        <div dir="rtl">
          <LogButton text="ورود" />
        </div>
        <div dir="rtl" className="text-xs mt-2">
          <NavLink
            to="/login/emaillogin"
            className="text-[#8d8d8d] inline-block pl-[150px]"
          >
            ورود با ایمیل
          </NavLink>
          <span className="text-[#8d8d8d] underline">حریم خصوصی</span>
          <span className="text-[#bfbfbf] block mt-6 text-justify text-[10px]">
            با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات <br></br>
            آکادمی سپهر را پذیرفته اید
          </span>
        </div>
      </div>
    </div>
  );
};

export { LoginCode };
