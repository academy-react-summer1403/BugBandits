import React, { useEffect, useState } from "react";
import { IoIosMore } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { getTeacherDetail } from "../../../Core/Services/api/TeachersApi/teacherdetail.api";
import { FaUser } from "react-icons/fa";

const TeacherSection = ({ teacherName, teacherId }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/teachers/detail/${teacherId}`);
  };

  const [teacherPic, setTeacherPic] = useState({});

  const getData = async () => {
    try {
      const result = await getTeacherDetail(teacherId);
      setTeacherPic(result || {});
      console.log(result);
    } catch (error) {
      console.error("Error fetching teacher details:", error);
      setTeacherPic({});
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, [teacherId]);

  return (
    <div className="w-full h-72 bg-white dark:bg-midnight_blue mb-5 rounded-2xl px-6">
      <div className="w-full h-24 flex flex-row border-b-2 pt-5">
        <div className="w-14 h-14 rounded-full">
          {teacherPic?.pictureAddress ? (
            <img
              src={teacherPic.pictureAddress}
              alt="Teacher Avatar"
              className="rounded-full"
            />
          ) : (
            <FaUser className="text-gray-500 w-full h-full" />
          )}
        </div>
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
        <span
          onClick={handleNavigation}
          className="text-ocean_blue text-xs pr-2 cursor-pointer"
        >
          مشاهده سایر آموزش های این استاد
        </span>
      </div>
    </div>
  );
};

export { TeacherSection };
