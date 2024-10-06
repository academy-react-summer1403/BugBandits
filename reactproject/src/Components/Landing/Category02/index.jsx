import React from "react";
import { Card } from "../../CourseCard";
import bgdesign from "./../../../assets/images/landing/bgdesign02.svg";

const Category02 = () => {
  return (
    <div className="border w-5/6 h-[1000px] m-auto mt-44 flex flex-row flex-wrap gap-9 relative">
      <img src={bgdesign} className="absolute top-[750px] left-[800px] -z-30" />
      {/* <img src={bgdesign} className="absolute top-[2000px] left-[0px] -z-30 border" /> */}

      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export { Category02 };
