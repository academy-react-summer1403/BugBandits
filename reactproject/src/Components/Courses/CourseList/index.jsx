import React from "react";
import { useState, useEffect } from "react";
import { Card } from "../../CourseCard";
import { getCourseList } from "../../../Core/Services/api/CourseApi/course";
import { SkeletonCard } from "../../Common/SkeletonCard";
import { AddCourseLike } from "../../../Core/Services/api/CourseApi/likecourse";
import { useParams } from "react-router-dom";
import { AddCourseDissLike } from "../../../Core/Services/api/CourseApi/dislikecourse";

const CourseList = ({ loading, courseList, setRand }) => {
  const [likeCourse, setLikeCourse] = useState();
  const [disLikeCourse, setDisLikeCourse] = useState();

  const { CourseId } = useParams();
  const postData = async (CourseId) => {
    const like = await AddCourseLike(CourseId);
    setLikeCourse(like);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    postData();
  }, [CourseId]);

  const postData2 = async (CourseId) => {
    const dislike = await AddCourseDissLike(CourseId);
    setDisLikeCourse(dislike);
  };
  useEffect(() => {
    postData2();
  }, [CourseId]);

  return (
    <div className="grid lg:grid-cols-3 gap-7 md:mr-4 mt-8 md:grid-cols-2 sm:grid-cols-2">
      {loading
        ? Array.from({ length: 9 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        : courseList?.courseFilterDtos.map((item) => (
            <Card
              key={item.courseId}
              id={item.courseId}
              tumbImageAddress={item.tumbImageAddress}
              title={item.title}
              cost={item.cost}
              describe={item.describe}
              teacherName={item.teacherName}
              likeCount={item.likeCount}
              userIsLiked={item.userIsLiked}
              userLikedId={item.userLikedId}
              dissLikeCount={item.dissLikeCount}
              userFavoriteId={item.userFavoriteId}
              isUserFavorite={item.isUserFavorite}
              currentUserDissLike={item.currentUserDissLike}
              setRand={setRand}
            />
          ))}
    </div>
  );
};

export { CourseList };
