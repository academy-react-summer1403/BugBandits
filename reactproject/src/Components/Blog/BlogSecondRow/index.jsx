import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { BlogCardB } from "../BlogCardB";

const BlogSecondRow = ({ news }) => {
  return (
    <div className="my-8">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
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
