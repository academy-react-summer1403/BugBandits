import React from "react";
import { Card } from "../../CourseCard";
import bgdesign from "./../../../assets/images/landing/bgdesign02.svg";
import { useSelector } from "react-redux";

const Category02 = () => {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } w-5/6 max-w-7xl m-auto mt-44 relative`}
    >
      <img
        src={bgdesign}
        className="absolute top-[750px] left-[800px] -z-30 dark:opacity-15"
      />
      <div className="flex flex-row flex-wrap gap-6 md:gap-9">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
export { Category02 };
