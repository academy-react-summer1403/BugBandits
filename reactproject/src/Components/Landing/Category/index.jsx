import React, { Fragment } from "react";
import { Card } from "../../CourseCard";
import { HiOutlinePlus } from "react-icons/hi";
import bgdesign02 from "./../../../assets/images/landing/bgdesign02.svg";

const Category = () => {
  return (
    <Fragment>
      <div className="relative">
        
        <img src={bgdesign02} className="absolute top-48 right-[800px] -z-10" />
      </div>
      <div className="w-56 m-auto relative top-24">
        <h1 className="text-ocean_blue font-bold text-3xl">
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
    </Fragment>
  );
};

export { Category };
