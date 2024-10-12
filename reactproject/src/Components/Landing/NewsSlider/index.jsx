import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Mousewheel } from "swiper/modules";
import slider01 from "./../../../assets/images/landing/slider01.svg";
import slider02 from "./../../../assets/images/landing/slider02.svg";
import slider03 from "./../../../assets/images/landing/info01.svg";
import line from "./../../../assets/images/landing/sliderline02.svg";

const NewsSlider = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  return (
    <div className={`${darkMode ? "dark" : ""} w-full relative mt-32 mx-auto`}>
      <img src={line} className="absolute top-20" />
      <Swiper
        className="vertical-slide-carousel swiper-container relative w-1/2 h-72 shadow-slider dark:shadow-sliderDark"
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
        modules={[Pagination, Mousewheel]}
      >
        <SwiperSlide>
          <div
            dir="rtl"
            className="bg-white dark:bg-midnight_blue h-full flex flex-row"
          >
            <div className="w-1/4 flex justify-center mr-10">
              <img src={slider01} className="m-auto" />
            </div>
            <div className="w-3/4 h-full p-10 flex flex-col justify-center">
              <div className="text-ocean_blue font-bold text-3xl mb-3 dark:text-white">
                <h1>مدرک معتبر</h1>
              </div>
              <div className="text-[#8d8d8d] dark:text-silver_gray">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روز.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            dir="rtl"
            className="bg-white dark:bg-midnight_blue h-full flex flex-row"
          >
            <div className="w-1/4 flex justify-center mr-10">
              <img src={slider02} className="m-auto" />
            </div>
            <div className="w-3/4 h-full p-10 flex flex-col justify-center">
              <div className="text-ocean_blue font-bold text-3xl mb-3 dark:text-white">
                <h1>مدرک معتبر</h1>
              </div>
              <div className="text-[#8d8d8d] dark:text-silver_gray">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روز.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            dir="rtl"
            className="bg-white dark:bg-midnight_blue h-full flex flex-row"
          >
            <div className="w-1/4 flex justify-center mr-10">
              <img src={slider03} className="m-auto" />
            </div>
            <div className="w-3/4 h-full p-10 flex flex-col justify-center">
              <div className="text-ocean_blue font-bold text-3xl mb-3 dark:text-white">
                <h1>مدرک معتبر</h1>
              </div>
              <div className="text-[#8d8d8d] dark:text-silver_gray">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روز.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export { NewsSlider };
