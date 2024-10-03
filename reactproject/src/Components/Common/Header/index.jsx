import React from 'react';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMoon } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <Fragment>
        <header dir="rtl" className="w-5/6 h-20 borer m-auto border-2 pt-10 flex flex-row ">
          <div className="flex text-dark_gray ml-[780px]">
              <NavLink to="" className="ml-7">logo</NavLink>
              <NavLink to="" className="ml-7">خانه</NavLink>
              <NavLink to="" className="ml-7">دوره ها</NavLink>
              <NavLink to="" className="ml-7">اساتید</NavLink>
              <NavLink to="" className="ml-7">اخبار</NavLink>
              <NavLink to="" className="ml-7">درباره ما</NavLink>
          </div>
          <div className="flex">
              <NavLink><HiMoon className="w-9 h-9 text-white bg-ocean_blue rounded-full border-4 border-ocean_blue" /></NavLink>
              <NavLink><FaUserCircle className="w-9 h-9 text-ocean_blue mr-2" /></NavLink>
  
          </div>
        </header>
      </Fragment>
    );
}

export  {Header};
