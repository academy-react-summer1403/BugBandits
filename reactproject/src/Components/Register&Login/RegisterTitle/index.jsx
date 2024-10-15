import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const RegisterTitle = ({ log, text }) => {
  const darkMode = useSelector((state) => state.darkMode.value);
  return (
    <div className={`${darkMode ? "dark" : ""} mb-2`}>
      <div>
        <span className="w-20 h-16 inline-block">logo</span>
        <span className="inline-block align-middle text-charcoal_gray text-4xl font-bold dark:text-ocean_blue">
          آکادمی سپهر
        </span>
      </div>
      <div>
        <h2 className="text-charcoal_gray text-xl font-bold pb-2 dark:text-white">
          ثبت نام
        </h2>
        <span className="text-charcoal_gray pl-2 text-sm dark:text-white">
          {text}
        </span>
        <NavLink to="/login" className="text-ocean_blue text-sm">
          {log}
        </NavLink>
      </div>
    </div>
  );
};

export { RegisterTitle };
