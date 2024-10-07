import React from "react";
import { LoginTitle } from "../LoginTitle";
import CodeInput from "../../Common/CodeInput";
import { LogButton } from "../../Common/LogButton";

const LoginCode = () => {
  return (
    <div className="w-[1000px] h-[500px] absolute top-[110px] right-[310px] flex">
      <div className="p-4 w-5/6 h-full"></div>
      <div dir="rtl" className="w-2/3 h-full pr-12 pt-16">
        <LoginTitle text="حساب کاربری ندارید؟" log="ثبت نام کنید." />
        <CodeInput />
        <LogButton text="ورود" />
        <div className="text-xs mt-2">
            <span className="text-[#8d8d8d] inline-block pl-[150px]">ورود با ایمیل</span>
            <span className="text-[#8d8d8d] underline">حریم خصوصی</span>
          <span className="text-[#bfbfbf] block mt-6 text-justify text-[10px]">
            با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات <br></br>آکادمی سپهر
            را پذیرفته اید
          </span>
        </div>
      </div>
    </div>
  );
};

export { LoginCode };
