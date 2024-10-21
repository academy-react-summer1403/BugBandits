import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";
import { PiHouse } from "react-icons/pi";
import { PiGraduationCap } from "react-icons/pi";
import { TbUserEdit } from "react-icons/tb";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { VscComment } from "react-icons/vsc";
import { NavLink } from "react-router-dom";


const HoverButtons = () => {
  return (
    <div className="w-11/12">
      <div className="flex flex-wrap gap-6">
        <Card
          title="دوره های من"
          href="/panel/mycourses"
          Icon={PiGraduationCap}
        />
        <Card title="ویرایش پروفایل"  href="#" Icon={TbUserEdit} />
        <Card title="علاقه مندی"  href="#" Icon={MdOutlineFavoriteBorder} />
        <Card
          title="نظرات"
          href="#"
          Icon={VscComment}
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <NavLink
      to={href}
      className="w-64 h-32 p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#75ACD3] to-cool_blue translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-[#F1F5F9] group-hover:text-[#75ACD3] group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-3xl text-ocean_blue group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-xl text-cool_blue group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-white relative z-10 duration-300">
        {subtitle}
      </p>
    </NavLink>
  );
};

export  {HoverButtons};