import React, { Fragment } from "react";
import bgdesign from "./../../../assets/images/landing/bgdesign02.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Correct import for Swiper styles
import { Pagination, Mousewheel } from "swiper/modules"; // Import the Pagination module

const ServiceSlider = () => {
  return (
    <div className="w-full absolute mt-32">
      {/* <Swiper
        className="vertical-slide-carousel swiper-container relative h-96"
        direction="vertical"
        loop={true}
        mousewheel={{ releaseOnEdges: true }}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        speed={900}
        modules={[Pagination, Mousewheel]} // Include the Pagination module
      >
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            <span className="text-3xl font-semibold text-indigo-600">
              Slide 1
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            <span className="text-3xl font-semibold text-indigo-600">
              Slide 2
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            <span className="text-3xl font-semibold text-indigo-600">
              Slide 3
            </span>
          </div>
        </SwiperSlide>
      </Swiper> */}

    </div>
  );
};

export { ServiceSlider };
