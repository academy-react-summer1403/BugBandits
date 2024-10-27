import React from "react";
import { IoIosMore } from "react-icons/io";


const TeacherSection = ({teacherName}) => {
  return (
    <div className="w-full h-72 bg-white dark:bg-midnight_blue mb-5 rounded-2xl px-6">
      <div className="w-full h-24 flex flex-row border-b-2 pt-5">
        <div className="w-14 h-14 bg-black rounded-full">{/* <img /> */}</div>
        <div className="pr-4 pt-1">
          <h1 className="text-ocean_blue text-xl font-bold">{teacherName}</h1>
          <h3 className="text-xs text-cool_blue dark:text-white">مدرس دوره</h3>
        </div>
      </div>
      <div className="w-full h-32 pt-3 border-b-2">
        <p className="text-[#8d8d8d] text-sm text-justify dark:text-white">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
        </p>
      </div>
      <div className="w-full h-10 flex flex-row justify-center pt-5">
        <IoIosMore className="text-ocean_blue cursor-pointer" />
        <span className="text-ocean_blue text-xs pr-2 cursor-pointer">
          مشاهده سایر آموزش های این استاد
        </span>
      </div>
    </div>
  );
};

export { TeacherSection };
