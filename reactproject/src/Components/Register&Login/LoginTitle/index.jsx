import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "./../../../assets/images/logo/logo.png";

const LoginTitle = ({ log, text, title }) => {
  const darkMode = useSelector((state) => state.darkMode.value);
  return (
    <div className={`${darkMode ? "dark" : ""} mt-10`}>
      <div className="flex flex-row gap-3">
        <img src={logo} className="w-10 h-10" />
        <span className="inline-block align-middle text-charcoal_gray text-4xl font-bold dark:text-ocean_blue">
          آکادمی سپهر
        </span>
      </div>
      <div className="mt-5">
        <h2 className="text-charcoal_gray text-xl font-bold pb-2 dark:text-white">
          {title}
        </h2>
        <span className="text-charcoal_gray pl-2 text-sm dark:text-white">
          {text}
        </span>
        <NavLink to="/register" className="text-ocean_blue text-sm">
          {log}
        </NavLink>
      </div>
    </div>
  );
};

export { LoginTitle };
