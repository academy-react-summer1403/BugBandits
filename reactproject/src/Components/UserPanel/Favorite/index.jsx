import React, { useEffect, useState } from "react";
import { PanelHeader } from "../PanelHeader";
import { MyCoursesCard } from "../MyCoursesCard";
import { MyFavCourseCard } from "./MyFavoriteCoursesCard";
import { getFavCourses } from "../../../Core/Services/api/UserPanel/getfavcourses.api";
import { Loading } from "../../Common/Loading";
import { Skeleton } from "./Skeleton";

const Favorite = () => {
  const [favCourses, setFavCourses] = useState({ favoriteCourseDto: [] });
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const courses = await getFavCourses();
    console.log(courses);
    setFavCourses(courses);
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
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} />
            ))
          : (favCourses.favoriteCourseDto || []).map((item) => (
              <MyFavCourseCard
                key={item.courseId}
                courseId={item.courseId}
                teacheName={item.teacheName}
                courseTitle={item.courseTitle}
                describe={item.describe}
                levelName={item.levelName}
                typeName={item.typeName}
                tumbImageAddress={item.tumbImageAddress}
                lastUpdate={item.lastUpdate}
              />
            ))}
      </div>
    </div>
  );
};

export { Favorite };
