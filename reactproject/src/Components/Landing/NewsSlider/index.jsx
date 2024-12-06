import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import slider01 from "./../../../assets/images/landing/slider01.svg";
import line from "./../../../assets/images/landing/sliderline02.svg";
import { getNewsList } from "../../../Core/Services/api/NewsApi/newslistcategory";

const NewsSlider = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [newsList, setNewsList] = useState([]);

  const getData = async () => {
    try {
      const fetchedNews = await getNewsList();
      const selectedIndices = [2, 3, 4, 9, 11, 12, 14];
      const filteredNews = fetchedNews.filter((_, index) =>
        selectedIndices.includes(index)
      );
      setNewsList(filteredNews);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setCurrentIndex(swiperRef.current.swiper.realIndex + 1);
    }
  };

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } w-full h-auto relative mt-32 mb-32 mx-auto `}
    >
      <img src={line} className="absolute top-20" alt="line" />
      <div className="flex justify-center mb-10">
        <h1 className="text-ocean_blue font-bold text-4xl">اخبار</h1>
      </div>
      <Swiper
        ref={swiperRef}
        className="vertical-slide-carousel rounded-lg swiper-container relative w-full md:w-3/4 lg:w-1/2 h-72 shadow-slider dark:shadow-sliderDark"
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
        {newsList.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              dir="rtl"
              className="bg-white dark:bg-midnight_blue h-full flex flex-row"
            >
              <div className="w-1/4 flex justify-center mr-10">
                <img
                  src={slider01}
                  className="m-auto"
                  alt="Repeating Slide Image"
                />
              </div>
              <div className="w-3/4 h-full p-10 flex flex-col justify-center">
                <div className="text-ocean_blue font-bold text-3xl mb-3 dark:text-white">
                  <h1>{item.categoryName || "عنوان"}</h1>
                </div>
                <div className="text-[#8d8d8d] dark:text-silver_gray">
                  <p>{item.googleDescribe || "توضیحات"}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="xl:w-10 xl:absolute xl:top-44 xl:right-80 xl:block hidden">
        <button onClick={() => swiperRef.current.swiper.slidePrev()}>
          <FaSortUp className="w-8 h-8 text-[#adadad] hover:text-ocean_blue cursor-pointer" />
        </button>
        <h1 className="text-ocean_blue dark:text-white ml-1 font-kalamehNum">
          {currentIndex}/{newsList.length}
        </h1>
        <button onClick={() => swiperRef.current.swiper.slideNext()}>
          <FaSortDown className="w-8 h-8 text-[#adadad] hover:text-ocean_blue cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export { NewsSlider };
