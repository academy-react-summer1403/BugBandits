import React, { useEffect, useState } from "react";
import { MyCoursesCard } from "../MyCoursesCard";
import { PanelHeader } from "../PanelHeader";
import { div } from "framer-motion/client";
import { Loading } from "../../Common/Loading";
import { getMyCourses } from "../../../Core/Services/api/UserPanel/mycourselist.api";

const MyCourses = () => {
  const [mycourses, setMycourses] = useState({ listOfMyCourses: [] });
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const courses = await getMyCourses();
    console.log(courses);
    setMycourses(courses);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="h-[610px] flex justify-center absolute right-1/2">
        <Loading />
      </div>
    );
  }
  return (
    <div className="w-full">
      <div className="relative right-28">
        <PanelHeader />
      </div>
      <div className="w-11/12 mr-16 h-auto pr-9 flex flex-wrap gap-12">
        {(mycourses.listOfMyCourses || []).map((item) => (
          <MyCoursesCard
            key={item.courseId}
            fullName={item.fullName}
            levelName={item.levelName}
            courseTitle={item.courseTitle}
            courseId={item.courseId}
            typeName={item.typeName}
            lastUpdate={item.lastUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export { MyCourses };
