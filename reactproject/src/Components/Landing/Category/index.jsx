import React, { useEffect, useState } from "react";
import { Card } from "../../CourseCard";
import bgdesign from "./../../../assets/images/landing/bgdesign02.svg";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import { getTopCourseList } from "../../../Core/Services/api/CourseApi/topcourse.api";
import { SkeletonCard } from "../../Common/SkeletonCard";

const Category = () => {
  const darkMode = useSelector((state) => state.darkMode.value);

  const [topCourseList, setTopCourseList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const courses = await getTopCourseList();
    setTopCourseList(courses);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={`${darkMode ? "dark" : ""} w-5/6 m-auto mt-44 relative`}>
      <img
        src={bgdesign}
        className="absolute top-[750px] left-[800px] -z-30 dark:opacity-15"
      />
      <div className="flex justify-center">
        <h1 className="text-ocean_blue font-bold text-3xl mb-5 dark:text-light_blue">
          جدید ترین دوره ها
        </h1>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SwiperSlide key={index} className="pt-16">
                <SkeletonCard />
              </SwiperSlide>
            ))
          : topCourseList.map((item, index) => (
              <SwiperSlide key={index} className="pt-16">
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
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};
export { Category };
