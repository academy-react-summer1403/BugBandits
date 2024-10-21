import React from "react";
import { MyCoursesCard } from "../MyCoursesCard";
import { PanelHeader } from "../PanelHeader";
import { div } from "framer-motion/client";

const MyCourses = () => {
  return (
    <div>
      <div>
        <PanelHeader />
      </div>
      <div className="w-11/12 mr-16 h-auto pr-9 flex flex-wrap gap-12">
        <MyCoursesCard />
        <MyCoursesCard />
        <MyCoursesCard />
        <MyCoursesCard />
      </div>
    </div>
  );
};

export { MyCourses };
