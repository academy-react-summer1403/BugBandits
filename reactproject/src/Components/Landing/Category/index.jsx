import React from "react";
import { Card } from "../../CourseCard";
import { HiOutlinePlus } from "react-icons/hi";
import bgdesign02 from "./../../../assets/images/landing/bgdesign02.svg";
import { useSelector } from "react-redux";

const Category = () => {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="relative">
        
        <img src={bgdesign02} className="absolute top-48 right-[800px] -z-10 dark:opacity-15" />
      </div>
      <div className="w-11/12 max-w-7xl m-auto relative top-24 text-center">
        <h1 className="text-ocean_blue font-bold text-3xl md:text-4xl dark:text-light_blue">
          جدید ترین دوره ها
        </h1>
        {/* <span className="border relative right-96">
          مشاهده همه
          <HiOutlinePlus />
        </span> */}
      </div>
      <div className="w-5/6 m-auto mt-44 flex flex-wrap justify-center gap-6 md:gap-9">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export { Category };
