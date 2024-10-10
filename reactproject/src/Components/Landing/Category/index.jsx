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
      <div className="w-56 m-auto relative top-24">
        <h1 className="text-ocean_blue font-bold text-3xl dark:text-light_blue">
          جدید ترین دوره ها
        </h1>
        {/* <span className="border relative right-96">
          مشاهده همه
          <HiOutlinePlus />
        </span> */}
      </div>
      <div className="w-5/6 h-96 m-auto mt-44 flex gap-9">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export { Category };
