import { Breadcrumbs } from "@material-tailwind/react";
import { HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const NavBarDetail = ({text}) => {
  return (
    <Breadcrumbs className="bg-white">
      <NavLink to="/" className="opacity-60 px-2">
        <HiHome className="h-5 w-5" />
      </NavLink>
      <NavLink to="/teachers">
        <span className="text-base px-2 font-iranSans" >اساتید</span>
      </NavLink>
      <NavLink to="/teachers/detail">
        <span className="text-base px-2 font-iranSans" >{text}</span>
      </NavLink>
    </Breadcrumbs>
  );
};

export { NavBarDetail };
