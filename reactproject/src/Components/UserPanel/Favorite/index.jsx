import React from "react";
import { PanelHeader } from "../PanelHeader";
import { MyCoursesCard } from "../MyCoursesCard";

const Favorite = () => {
  return (
    <div>
      <div>
        <PanelHeader />
      </div>
      <div className="w-11/12 mr-16 h-auto pr-9 flex flex-wrap gap-12">
        <MyCoursesCard />
        <MyCoursesCard />

      </div>
    </div>
  );
};

export { Favorite };
