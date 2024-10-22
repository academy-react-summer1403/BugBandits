import React from "react";
import { useState, useEffect } from "react";
import { Card } from "../../CourseCard";
import { getCourseList } from "../../../Core/Services/api/course";

const CourseList = () => {
  const [courseList, setCourseList] = useState([]);

  const getData = async () => {
    const courses = await getCourseList();
    setCourseList(courses);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-7 mr-4 mt-8">
      {courseList?.map((item) => (
        <Card
          key={item.courseId}
          courseId={item.courseId}
          tumbImageAddress={item.tumbImageAddress}
          title={item.title}
          cost={item.cost}
          describe={item.describe}
          teacherName={item.teacherName}
          getData={getData}
        />
      ))}
    </div>
  );
};

export { CourseList };
