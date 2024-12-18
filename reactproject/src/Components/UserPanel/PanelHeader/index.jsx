import React, { useEffect } from "react";
import { IoArrowUndoCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import moon from "./../../../assets/images/landing/moon.svg";
import sun from "./../../../assets/images/landing/sun.svg";
import { DarkModeSlice } from "../../../Redux/Slices/DarkModeSlice";
import { NavLink } from "react-router-dom";

const PanelHeader = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      dir="ltr"
      className={`${
        darkMode && "dark"
      } lg:w-5/6 sm:w-96 w-full p-2 h-14 flex flex-row `}
    >
      <div>
        <NavLink to="/">
          <IoArrowUndoCircle className="w-11 h-11 text-ocean_blue cursor-pointer dark:text-white" />
        </NavLink>
      </div>
      <div className="pt-1">
        <img
          src={darkMode ? sun : moon}
          onClick={() => dispatch(DarkModeSlice.actions.toggleDarkMode())}
          className="w-9 h-9 cursor-pointer"
        ></img>
      </div>
    </div>
  );
};

export { PanelHeader };
