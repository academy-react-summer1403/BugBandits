import { Breadcrumbs } from "@material-tailwind/react";
import { HiHome } from "react-icons/hi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NavBarDetail = ({ text }) => {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <Breadcrumbs
      className={`${darkMode ? "dark" : ""} bg-white dark:bg-midnight_blue`}
    >
      <NavLink to="/" className="opacity-60 px-2">
        <HiHome className="h-5 w-5 dark:text-white" />
      </NavLink>
      <NavLink to="/teachers">
        <span className="text-base px-2 font-iranSans dark:text-white">
          اساتید
        </span>
      </NavLink>
      <NavLink to="/teachers/detail">
        <span className="text-base px-2 font-iranSans dark:text-white">
          {text}
        </span>
      </NavLink>
    </Breadcrumbs>
  );
};

export { NavBarDetail };
