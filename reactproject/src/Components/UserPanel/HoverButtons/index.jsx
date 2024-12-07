import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";
import { PiHouse } from "react-icons/pi";
import { PiGraduationCap } from "react-icons/pi";
import { TbUserEdit } from "react-icons/tb";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { VscComment } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const HoverButtons = () => {
  return (
    <div className="w-auto h-auto mt-10">
      <div className="flex flex-wrap gap-8">
        <Card
          title="دوره های من"
          href="/panel/mycourses"
          Icon={PiGraduationCap}
        />
        <Card
          title="ویرایش پروفایل"
          href="/panel/editprofile"
          Icon={TbUserEdit}
        />
        <Card
          title="علاقه مندی"
          href="/panel/favorite"
          Icon={MdOutlineFavoriteBorder}
        />
        <Card title="نظرات" href="#" Icon={VscComment} />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <NavLink
      to={href}
      className={`${
        darkMode ? "dark" : ""
      } md:w-56 w-2/5 h-24 p-4 bg-white dark:bg-[#415a77] rounded border-[1px] border-slate-300 relative right-5 lg:right-0 overflow-hidden group bg-whit"`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#75ACD3] to-cool_blue dark:from-[#002855] dark:to-[#001233] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-[#F1F5F9] dark:text-[#778da9] group-hover:text-[#75ACD3] dark:group-hover:text-[#778da9] group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-3xl text-ocean_blue dark:text-white group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium whitespace-nowrap md:text-xl text-sm text-cool_blue dark:text-white group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-white relative z-10 duration-300">
        {subtitle}
      </p>
    </NavLink>
  );
};

export { HoverButtons };
