import React from "react";
import bgdesign from "./../../../assets/images/landing/bgdesign02.svg";
import adamak from "./../../../assets/images/landing/adamak.svg";
import adamak02 from "./../../../assets/images/landing/adamak02.svg";
import info01 from "./../../../assets/images/landing/info01.svg";
import info02 from "./../../../assets/images/landing/info02.svg";
import info03 from "./../../../assets/images/landing/info03.svg";
import info04 from "./../../../assets/images/landing/info04.svg";

const InformationSection = () => {
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
    <div className="w-11/12 h-[2000px] border m-auto relative">
      <img
        src={bgdesign}
        className="absolute top-[-200px] right-[750px] -z-30"
      />
      <img src={adamak} className="w-[500px] absolute top-48 -right-20" />
      <img src={adamak02} className="absolute top-[514px] right-[415px]" />
      <div
        dir="rtl"
        className="w-2/3 h-20 m-auto relative top-96 flex gap-20 text-charcoal_gray justify-center text-center"
      >
        <div>
          <h1>5</h1>
          <h1>دانشجو آکادمی</h1>
        </div>
        <div>
          <h1>12</h1>
          <h1>دانشجو آکادمی</h1>
        </div>
        <div>
          <h1>4</h1>
          <h1>دانشجو آکادمی</h1>
        </div>
        <div>
          <h1>3</h1>
          <h1>دانشجو آکادمی</h1>
        </div>
      </div>
      <div className="w-2/3 h-full m-auto border flex gap-10 relative top-[750px]">
        {InformationCard.map((card, index) => (
          <div dir="rtl" className="w-52 h-52 bg-white rounded-2xl">
            <img
              src={card.img}
              alt={card.title}
              className="w-32 h-32 object-cover rounded-t-2xl"
            />
            <h2 className="mt-2 font-bold">{card.title}</h2>
            <p className="text-sm text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { InformationSection };
