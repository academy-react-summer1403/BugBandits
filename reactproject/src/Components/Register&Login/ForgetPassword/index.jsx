import React from "react";
import { LogInput } from "../../Common/LogInput";
import { LoginTitle } from "../LoginTitle";
import { LogButton } from "../../Common/LogButton";
import { useSelector } from "react-redux";

const ForgetPassWord = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  return (
    <div
      dir="rtl"
      className={`${
        darkMode ? "dark" : ""
      } w-96 h-96 absolute top-[110px] right-[310px] flex`}
    >
      <div className="flex flex-col justify-center pr-12 pt-16">
        <div>
          <h3 className="text-charcoal_gray font-bold text-2xl dark:text-white">
            تغییر رمز
          </h3>
        </div>
        <div className="mt-10">
          <LogInput placeholder="رمز جدید" />
          <LogButton text="ثبت" />
        </div>
      </div>
    </div>
  );
};

export { ForgetPassWord };
