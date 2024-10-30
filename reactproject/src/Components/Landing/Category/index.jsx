import React, { useEffect, useRef, useState } from "react";
import { Card } from "../../CourseCard";
import bgdesign from "./../../../assets/images/landing/bgdesign02.svg";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { getTopCourseList } from "../../../Core/Services/api/CourseApi/topcourse.api";
import { SkeletonCard } from "../../Common/SkeletonCard";
import { Pagination, Navigation } from "swiper/modules";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";

const Category = () => {
  const darkMode = useSelector((state) => state.darkMode.value);

  const [topCourseList, setTopCourseList] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);
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
    <div className={`${darkMode ? "dark" : ""} relative w-5/6 m-auto mt-44 `}>
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
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={4}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
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
              <SwiperSlide
                key={index}
                className="pt-16 flex flex-row justify-center"
              >
                <SkeletonCard />
              </SwiperSlide>
            ))
          : topCourseList.slice(1).map((item) => (
              <SwiperSlide
                key={item.courseId}
                className="pt-16 flex flex-row justify-center"
              >
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
      <div className="absolute top-1/2 left-[1280px]">
        <button
          className=""
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <FiChevronRight className="w-10 h-10 text-[#adadad] hover:text-ocean_blue" />
        </button>
      </div>
      <div className="absolute top-1/2 right-[1300px]">
        <button
          className=""
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <FiChevronLeft className="w-10 h-10 text-[#adadad] hover:text-ocean_blue" />
        </button>
      </div>
    </div>
  );
};
export { Category };
