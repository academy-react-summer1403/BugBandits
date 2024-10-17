import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { GiGraduateCap } from "react-icons/gi";
import { BsClock } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi";
import { AiOutlineMinus } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";

const TeacherList = () => {
    const navigate = useNavigate();

  const teacher = [
    {
      name: "علی علوی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
      score: "5/5",
      hours: "10:20:45",
      education: "PHD",
      courses: "6 دوره اموزشی",
    },
    {
      name: "احمد احمدی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.  ",
      score: "2/5",
      hours: "15:26:45",
      education: "PHD",
      courses: "11 دوره اموزشی",
    },
    {
      name: "مریم حسینی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
      score: "4/5",
      hours: "18:40:45",
      education: "PHD",
      courses: "2 دوره اموزشی",
    },
    {
      name: "صبا اسلامی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
      score: "4/5",
      hours: "15:26:45",
      education: "PHD",
      courses: "8 دوره اموزشی",
    },
  ];
  return (
    <div>
      {teacher.map((item, index) => (
        <div className="w-2/5 h-64 bg-white mb-8 m-auto rounded-2xl flex flex-row">
          <div className="w-1/2 h-full relative left-8">
            <img
              src=""
              alt=""
              className="w-full h-[90%] bg-ocean_blue rounded-2xl mt-3 "
            />
          </div>
          <div className="w-3/5 h-full pt-4">
            <div className="w-11/12">
              <h1 className="text-cool_blue text-xl">{item.name}</h1>
              <p className="text-sm text-[#8C9AAC] text-justify pt-2">
                {item.desc}
              </p>
            </div>
            <div className="w-11/12 flex flex-wrap gap-2 pt-5 text-white">
              <div className="w-28 h-6 bg-[#adadad] rounded-lg pt-1 pr-2 flex flex-row">
                <BsClock />
                <span className="relative right-5 bottom-1">{item.hours}</span>
              </div>
              <div className="w-28 h-6 bg-[#adadad] rounded-lg pt-1 pr-2 flex flex-row">
                <GiGraduateCap />
                <span className="relative right-12 bottom-1">
                  {item.education}
                </span>
              </div>
              <div className="w-28 h-6 bg-[#adadad] rounded-lg pt-1 pr-2 flex flex-row">
                <HiOutlineBookOpen />
                <span className="relative right-2 bottom-0 whitespace-nowrap text-xs">
                  {item.courses}
                </span>
              </div>
              <div className="w-28 h-6 bg-[#adadad] rounded-lg pt-1 pr-2 flex flex-row">
                <TiStarFullOutline />
                <span className="relative right-14 bottom-1">{item.score}</span>
              </div>
            </div>
            <div className="w-11/12 h-10 mt-5 border-t-2">
              <div onClick={() => navigate("/teachers/detail")} to="/" dir="ltr" className="flex flex-row mt-4">
                <span className="cursor-pointer text-xs pr-2 text-ocean_blue">
                  مشاهده جزيیات
                </span>
                <AiOutlineMinus className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { TeacherList };
