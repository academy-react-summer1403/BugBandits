import React from "react";
import { useState, useEffect } from "react";
import { Card } from "../../CourseCard";
import { getCourseList } from "../../../Core/Services/api/CourseApi/course";
import { SkeletonCard } from "../../Common/SkeletonCard";

const CourseList = () => {
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const courses = await getCourseList();
    setCourseList(courses);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-7 mr-4 mt-8">
      {loading
        ? Array.from({ length: 9 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        : courseList?.map((item) => (
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
