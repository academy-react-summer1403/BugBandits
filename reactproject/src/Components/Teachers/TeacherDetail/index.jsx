import React, { useEffect, useState } from "react";
import { NavBarDetail } from "../NavBarDetail";
import { FilterNavBar } from "../FilterNavBar";
import { CourseList } from "../../Courses/CourseList";
import { Card } from "../../CourseCard";
import { getTeacherDetail } from "../../../Core/Services/api/TeachersApi/teacherdetail.api";
import { useParams } from "react-router-dom";
import { Loading } from "../../Common/Loading";
import { TeacherDetailHeader } from "../TeacherDetailHeader";

const TeacherDetail = () => {
  const { teacherId } = useParams();
  const [teacherDetail, setTeacherDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const detail = await getTeacherDetail(teacherId);
    setTeacherDetail(detail);
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (teacherId) {
      getData();
    }
  }, [teacherId]);

  if (loading) {
    return (
      <div className="h-[610px] flex justify-center">
        <Loading />
      </div>
    );
  }
  const cost = "100000";
  const teacherName = "مهدی اصغری";
  const title = "این یک تست است";
  const describe =
    "در این دوره آموزش کامل آخرین ورژن فریم ورک Tailwind css صورت می‌پذیرد و 3 پروژه عملی شامل طراحی سایت اینستاگرام، گوگل و توییتر نیز برای تثبیت موارد آموخته شده در نظر گرفته شده است.";
  return (
    <div dir="rtl" className="w-5/6 h-auto mt-5 m-auto">
      <div className="w-full h-auto rounded-xl bg-white dark:bg-midnight_blue">
        <NavBarDetail text="درباره استاد" />
      </div>
      <TeacherDetailHeader
        fullName={teacherDetail?.fullName}
        courseCounts={teacherDetail?.courseCounts}
        newsCount={teacherDetail?.newsCount}
        pictureAddress={teacherDetail?.pictureAddress}
      />
      <div className="mt-7">
        <FilterNavBar />
      </div>
      <div className="flex flex-row gap-10 mt-20">
        <Card
          title={title}
          describe={describe}
          teacherName={teacherName}
          cost={cost}
        />
        <Card
          title={title}
          describe={describe}
          teacherName={teacherName}
          cost={cost}
        />
        <Card
          title={title}
          describe={describe}
          teacherName={teacherName}
          cost={cost}
        />
        <Card
          title={title}
          describe={describe}
          teacherName={teacherName}
          cost={cost}
        />
      </div>
    </div>
  );
};

export { TeacherDetail };
