import React from "react";
import { CourseDetailHeader } from "../CourseDetailHeader";
import { CourseDetailContainer } from "../CourseDetailContainer";

const CourseDetailHolder = () => {
  return (
    <div className="w-5/6 h-[2000px] flex flex-col m-auto mt-20">
      <div>
        <CourseDetailHeader />
      </div>
      <div>
        <CourseDetailContainer/>
      </div>
    </div>
  );
};

export { CourseDetailHolder };
