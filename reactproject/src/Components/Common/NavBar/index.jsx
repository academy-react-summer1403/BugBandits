import React from "react";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import { DrawerPlacement } from "../../Courses/FilterSection/MobileMode";

const NavBar = ({ setSearchQuery }) => {
  const darkMode = useSelector((state) => state.darkMode.value);

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query ? `&Query=${query}` : "");
  };

  return (
    <div
      className={`${
        darkMode && "dark"
      } w-5/6 h-16 m-auto flex flex-row bg-white rounded-xl dark:bg-midnight_blue`}
    >
      <div className="flex flex-row py-4 px-6">
        <input
          type="text"
          placeholder="جستجو"
          className="w-28 outline-none text-charcoal_gray dark:bg-midnight_blue"
          onChange={handleSearchInputChange}
        />
        <CiSearch className="text-2xl relative left-0 top-1 dark:text-white" />
      </div>
      <div className="flex gap-5 text-[#8d8d8d] dark:text-white mt-4 mr-5">
        <span className="text-charcoal_gray dark:text-white border-l pl-5 mb-3 whitespace-nowrap hidden sm:block">
          مرتب سازی
        </span>
        <span className="hover:text-charcoal_gray cursor-pointer whitespace-nowrap hidden sm:block">
          جدیدترین
        </span>
        <span className="hover:text-charcoal_gray cursor-pointer whitespace-nowrap hidden sm:block">
          پر مخاطب ترین
        </span>
        <span className="hover:text-charcoal_gray cursor-pointer whitespace-nowrap hidden md:block">
          گران ترین
        </span>
        <span className="hover:text-charcoal_gray cursor-pointer whitespace-nowrap hidden md:block">
          ارزان ترین
        </span>
        <DrawerPlacement/>

      </div>
    </div>
  );
};

export { NavBar };
