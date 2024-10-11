import React from "react";
import { Card } from "../../CourseCard";
import bgdesign from "./../../../assets/images/landing/bgdesign02.svg";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import {  Pagination } from "swiper/modules"; // Import required modules

const Category02 = () => {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <div className={`${darkMode ? "dark" : ""} w-5/6 m-auto mt-44 relative`}>
      <img src={bgdesign} className="absolute top-[750px] left-[800px] -z-30 dark:opacity-15" />

      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        pagination={{ clickable: true }}
        loop={true}
        modules={[ Pagination]}
        className="mySwiper"
        breakpoints={{
          100:{
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
        {[...Array(8)].map((_, index) => (
          <SwiperSlide key={index} className="pt-16">
            <Card />
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};
export { Category02 };
