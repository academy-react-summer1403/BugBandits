import React from "react";
import { RegisterTitle } from "../RegisterTitle";
import CodeInput from "../../Common/CodeInput";
import { LogButton } from "../../Common/LogButton";
import VerificationInput from "react-verification-input";
import "./../../../Style/CodeInput.css";

const RegisterCode = () => {
  return (
    <div className="w-[920px] h-[500px] absolute top-[110px] right-[310px] flex">
      <div className="p-4 w-5/6 h-full"></div>
      <div className="w-2/3 h-full pr-12 pt-16">
        <div dir="rtl">
          <RegisterTitle text="کد ارسال شده را وارد کنید" />
        </div>

        <div className="mt-9">
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

        <div dir="rtl" className="mt-8">
          <LogButton text="تایید و ثبت نام" />
        </div>
        <div dir="rtl" className="mt-4">
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
