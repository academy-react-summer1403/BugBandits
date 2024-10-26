import React, { Fragment, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import slider01 from "./../../../assets/images/landing/slider01.svg";
import slider02 from "./../../../assets/images/landing/slider02.svg";
import slider03 from "./../../../assets/images/landing/info01.svg";
import line from "./../../../assets/images/landing/sliderline02.svg";

const NewsSlider = () => {
  const news = [
    {
      img: slider01,
      title: "مدرک معتبر",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و بااستفاده از طراحان گرافیک است. چاپگرها و متون بلکه روز. ",
    },
    {
      img: slider02,
      title: "کلاس های انلاین",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و بااستفاده از طراحان گرافیک است. چاپگرها و متون بلکه روز. ",
    },
    {
      img: slider03,
      title: "اساتید مجرب",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و بااستفاده از طراحان گرافیک است. چاپگرها و متون بلکه روز. ",
    },
  ];
  const darkMode = useSelector((state) => state.darkMode.value);
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    const realIndex = swiperRef.current.swiper.realIndex;
    setCurrentIndex(realIndex + 1);
  };
  return (
    <div className={`${darkMode ? "dark" : ""} w-full relative mt-32 mx-auto`}>
      {/* <img src={line} className="absolute top-20" /> */}
      <div className="flex justify-center mb-10">
        <h1 className="text-ocean_blue font-bold text-4xl">اخبار</h1>
      </div>
      <Swiper
        effect="fade"
        ref={swiperRef}
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
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSlideChange={handleSlideChange}
        modules={[Pagination, Mousewheel, Autoplay]}
      >
        {news.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              dir="rtl"
              className="bg-white dark:bg-midnight_blue h-full flex flex-row"
            >
              <div className="w-1/4 flex justify-center mr-10">
                <img src={item.img} className="m-auto" />
              </div>
              <div className="w-3/4 h-full p-10 flex flex-col justify-center">
                <div className="text-ocean_blue font-bold text-3xl mb-3 dark:text-white">
                  <h1>{item.title} </h1>
                </div>
                <div className="text-[#8d8d8d] dark:text-silver_gray">
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-10 absolute top-44 right-80">
        <button
          className=""
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <FaSortUp className="w-8 h-8 text-[#adadad] hover:text-ocean_blue cursor-pointer " />
        </button>
        <h1 className="text-ocean_blue dark:text-white ml-1 font-kalamehNum">
          {currentIndex}/{news.length}
        </h1>
        <button
          className=""
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <FaSortDown className="w-8 h-8 text-[#adadad] hover:text-ocean_blue cursor-pointer " />
        </button>
      </div>
    </div>
  );
};

export { NewsSlider };
