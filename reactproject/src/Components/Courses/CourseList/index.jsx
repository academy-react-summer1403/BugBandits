import React from "react";
import { useState, useEffect } from "react";
import { Card } from "../../CourseCard";
import { getCourseList } from "../../../Core/Services/api/CourseApi/course";
import { SkeletonCard } from "../../Common/SkeletonCard";
import { AddCourseLike } from "../../../Core/Services/api/CourseApi/likecourse";
import { useParams } from "react-router-dom";

const CourseList = ({ loading, courseList }) => {
  const [likeCourse, setLikeCourse] = useState();

  const { CourseId } = useParams();
  const postData = async (CourseId) => {
    const like = await AddCourseLike(CourseId);
    setLikeCourse(like);
  };
  useEffect(() => {
    postData();
  }, [CourseId]);

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
              likeCount={item.likeCount}
              dissLikeCount={item.dissLikeCount}
              postData={postData}
            />
          ))}
    </div>
  );
};

export { CourseList };
