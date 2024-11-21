import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { BlogCardB } from "../BlogCardB";

const BlogSecondRow = ({ news }) => {
  return (
    <div className="my-8" dir="rtl">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        dir="rtl"
      >
        {news?.news.map((item) => (
          <SwiperSlide key={item.id}>
            <BlogCardB
              id={item.id}
              title={item.title}
              miniDescribe={item.miniDescribe}
              addUserProfileImage={item.addUserProfileImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { BlogSecondRow };
