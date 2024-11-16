import { Breadcrumbs } from "@material-tailwind/react";
import { HiHome } from "react-icons/hi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const BreadCrumbsBlogDetail = ({ text }) => {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <Breadcrumbs
      className={`${darkMode ? "dark" : ""} bg-white dark:bg-midnight_blue my-8`}
    >
      <NavLink to="/" className="opacity-60 px-2">
        <HiHome className="h-5 w-5 dark:text-white" />
      </NavLink>
      <NavLink to="/blog">
        <span className="text-base px-2 font-iranSans dark:text-white">
          اخبار
        </span>
      </NavLink>
      <NavLink to={`/blog/detail`}>
        <span className="text-base px-2 font-iranSans dark:text-white">
          {text}
        </span>
      </NavLink>
    </Breadcrumbs>
  );
};

export { BreadCrumbsBlogDetail };
