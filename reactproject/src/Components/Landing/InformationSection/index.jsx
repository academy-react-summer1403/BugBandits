import React from "react";
import bgdesign from "./../../../assets/images/landing/bgdesign02.svg";
import info01 from "./../../../assets/images/landing/info01.svg";
import info02 from "./../../../assets/images/landing/info02.svg";
import info03 from "./../../../assets/images/landing/info03.svg";
import info04 from "./../../../assets/images/landing/info04.svg";
import line from "./../../../assets/images/landing/line.svg";
import linemark from "./../../../assets/images/landing/linemark.svg";
import { useSelector } from "react-redux";

const InformationSection = () => {
  const darkMode = useSelector((state) => state.darkMode.value);

  const InformationCard = [
    {
      img: info01,
      title: "فرانت اند",
      desc: "توضیحات کوچیک درباره دسته بندی",
    },
    {
      img: info02,
      title: "بک اند",
      desc: "توضیحات کوچیک درباره دسته بندی",
    },
    {
      img: info03,
      title: " امنیت",
      desc: "توضیحات کوچیک درباره دسته بندی",
    },
    {
      img: info04,
      title: " هوش مصنوعی",
      desc: "توضیحات کوچیک درباره دسته بندی",
    },
  ];

  return (
    <div
      className={`${
        darkMode && "dark"
      } w-11/12 h-[1100px] max-w-7xl m-auto mt-96 relative`}
    >
      <img
        src={bgdesign}
        className="absolute top-[-800px] right-[750px] -z-30 dark:opacity-15"
      />
      <img
        src={line}
        className="hidden mid:block mid:w-[1000px] mid:absolute mid:top-[350px] mid:right-[450px]"
      />
      <img
        src={linemark}
        className="hidden mid:block mid:absolute mid:top-[745px] mid:right-[408px]"
      />

      <div
        dir="rtl"
        className="w-11/12 md:w-2/3 h-20 m-auto relative top-52 flex md:flex-row gap-10 text-charcoal_gray dark:text-white justify-center text-center"
      >
        <div>
          <h1 className="text-2xl">5</h1>
          <h1>دانشجو آکادمی</h1>
        </div>
        <div>
          <h1 className="text-2xl">12</h1>
          <h1>دوره آموزشی</h1>
        </div>
        <div>
          <h1 className="text-2xl">4</h1>
          <h1>استاد فعال </h1>
        </div>
        <div>
          <h1 className="text-2xl">3</h1>
          <h1>رضایتمندی </h1>
        </div>
      </div>
      <div className="w-full flex justify-center flex-wrap gap-10 relative top-[300px]">
        {InformationCard.map((card, index) => (
          <div
            dir="rtl"
            key={index}
            className=" w-52 h-52 bg-white dark:bg-midnight_blue rounded-2xl flex flex-col text-center shadow-custom"
          >
            <img
              src={card.img}
              alt="not found"
              className="w-32 h-32 object-cover rounded-t-2xl mx-auto mt-3 dark:opacity-20"
            />
            <h2 className="font-bold text-charcoal_gray mb-1 dark:text-white">
              {card.title}
            </h2>
            <p className="text-[10px] text-[#8d8d8d] dark:text-white">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { InformationSection };
