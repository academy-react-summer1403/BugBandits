import { Breadcrumbs } from "@material-tailwind/react";
import { HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const NavBarDetail = () => {
  return (
    <Breadcrumbs className="">
      <NavLink to="/" className="opacity-60 px-2">
        <HiHome className="h-5 w-5" />
      </NavLink>
      <NavLink to="/courses" className="opacity-60 px-2">
        <span className="text-base hover:text-ocean_blue">دوره ها</span>
      </NavLink>
      <NavLink to="/teachers">
        <span className="text-base px-2 text-ocean_blue">اساتید</span>
      </NavLink>
    </Breadcrumbs>
  );
};

export { NavBarDetail };
