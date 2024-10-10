import React from "react";
import { Card } from "../../CourseCard";
import bgdesign from "./../../../assets/images/landing/bgdesign02.svg";
import { useSelector } from "react-redux";

const Category02 = () => {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <div className={`${darkMode && "dark"} w-5/6 h-[1000px] m-auto mt-44 flex flex-row flex-wrap gap-9 relative`}>
      <img src={bgdesign} className="absolute top-[750px] left-[800px] -z-30 dark:opacity-15" />
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
