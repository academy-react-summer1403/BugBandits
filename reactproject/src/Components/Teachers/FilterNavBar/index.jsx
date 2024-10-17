import React from "react";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";

const FilterNavBar = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  return (
    <div className={`${darkMode && "dark"} w-full h-16 m-auto flex flex-row bg-white rounded-xl dark:bg-midnight_blue`} >
      <div className="flex flex-row py-4 px-6">
        <input type="text" placeholder="جستجو" className="w-28 outline-none text-charcoal_gray dark:bg-midnight_blue"/>
        <CiSearch className="text-2xl relative left-0 top-1 dark:text-white"/>
      </div>
      <div className="flex gap-5 text-[#8d8d8d] dark:text-white mt-4 mr-5">
        <span className="text-charcoal_gray dark:text-white border-l pl-5 mb-3">مرتب سازی</span>
        <span className="hover:text-charcoal_gray cursor-pointer">جدیدترین</span>
        <span className="hover:text-charcoal_gray cursor-pointer">پرفروش ترین</span>
        <span className="hover:text-charcoal_gray cursor-pointer">گران ترین</span>
        <span className="hover:text-charcoal_gray cursor-pointer">ارزان ترین</span>
      </div>
    </div>
  );
};

export { FilterNavBar };
