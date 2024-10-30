import React from "react";
import { Card } from "../../CourseCard";
import { SkeletonCard } from "../../Common/SkeletonCard";

const CourseList = ({ loading, courseList, getData }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-7 mr-4 mt-8 md:grid-cols-2 sm:grid-cols-1">
      {loading
        ? Array.from({ length: 9 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        : courseList?.courseFilterDtos.map((item) => (
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
