import React from "react";
import { RegisterTitle } from "../RegisterTitle";
import CodeInput from "../../Common/CodeInput";
import { LogButton } from "../../Common/LogButton";

const RegisterCode = () => {
  return (
    <div className="w-[1000px] h-[500px] absolute top-[110px] right-[310px] flex">
      <div className="p-4 w-5/6 h-full"></div>
      <div dir="rtl" className="w-2/3 h-full pr-12 pt-16">
        <RegisterTitle text="کد ارسال شده را وارد کنید" />
        <div className="mt-9">
          {" "}
          <CodeInput />
        </div>

        <div className="mt-8">
          <LogButton text="تایید و ثبت نام" />
        </div>
        <div className="mt-4">
          <input type="checkbox" id="rule" />
          <label
            htmlFor="rule"
            className="text-[#8d8d8d] text-[10px] pr-1 cursor-pointer"
          >
            قوانین را مطالعه کرده و با شرایط موافقم
          </label>
          <span className="text-[#8d8d8d] text-xs inline-block pr-5 underline cursor-pointer">
            قوانین و شرایط
          </span>
        </div>
      </div>
    </div>
  );
};

export { RegisterCode };
