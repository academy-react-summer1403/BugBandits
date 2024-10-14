import React from "react";
import { NavBar } from "../../Common/NavBar";
import FilterSection from "../FilterSection";
import { CourseList } from "../CourseList";

const CourseHolder = () => {
  return (
    <div dir="rtl" className="w-full h-auto mb-[550px]">
      <div className="w-5/6 h-16 m-auto text-cool_blue font-bold text-xl mt-10">
        <h1>دوره ها</h1>
      </div>
      <div>
        <NavBar />
      </div>
      <div className="w-5/6 h-[1000px] m-auto mt-10 grid grid-cols-[1fr_3fr]">
        <FilterSection />
        <div className="h-full">
          <CourseList />
        </div>
      </div>
    </div>
  );
};

export { CourseHolder };
