import React from "react";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className="w-5/6 h-16 m-auto flex flex-row bg-white rounded-xl ">
      <div className="flex flex-row py-4 px-6">
        <input type="text" placeholder="جستجو" className="w-28 outline-none text-charcoal_gray"/>
        <CiSearch className="text-2xl relative left-0 top-1"/>
      </div>
      <div className="flex gap-5 text-[#8d8d8d] mt-4 mr-5">
        <span className="text-charcoal_gray border-l pl-5 mb-3">مرتب سازی</span>
        <span className="hover:text-charcoal_gray cursor-pointer">جدیدترین</span>
        <span className="hover:text-charcoal_gray cursor-pointer">پرفروش ترین</span>
        <span className="hover:text-charcoal_gray cursor-pointer">گران ترین</span>
        <span className="hover:text-charcoal_gray cursor-pointer">ارزان ترین</span>
      </div>
    </div>
  );
};

export { NavBar };
