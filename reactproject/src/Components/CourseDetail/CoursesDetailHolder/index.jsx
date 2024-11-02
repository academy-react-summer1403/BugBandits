import React, { useEffect, useState } from "react";
import { CourseDetailHeader } from "../CourseDetailHeader";
import { CourseDetailContainer } from "../CourseDetailContainer";
import { getCourseDetail } from "../../../Core/Services/api/CourseApi/coursedetail.api";
import { useParams } from "react-router-dom";
import { Loading } from "../../Common/Loading";

const CourseDetailHolder = () => {
  const { id } = useParams();
  const [courseDetail, setCourseDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const result = await getCourseDetail(id);
    setCourseDetail(result);
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, [id]);

  if (loading) {
    return (
      <div className="h-[610px] flex justify-center">
        <Loading />
      </div>
    );
  }
  if (!courseDetail) {
    return (
      <div className="h-[610px] flex justify-center">
        <Loading />
      </div>
    );
  }
  return (
    <div className="w-5/6 h-auto flex flex-col m-auto mt-20 mb-32">
      <div>
        <CourseDetailHeader
          cost={courseDetail.cost}
          title={courseDetail.title}
          miniDescribe={courseDetail.miniDescribe}
          imageAddress={courseDetail.imageAddress}
          courseId={courseDetail.courseId}
        />
      </div>
      <div>
        <CourseDetailContainer
          endTime={courseDetail.endTime}
          startTime={courseDetail.startTime}
          teacherName={courseDetail.teacherName}
          currentRate={courseDetail.currentRate}
          cost={courseDetail.cost}
          capacity={courseDetail.capacity}
          currentRegistrants={courseDetail.currentRegistrants}
          describe={courseDetail.describe}
          courseLevelName={courseDetail.courseLevelName}
          courseStatusName={courseDetail.courseStatusName}
          currentUserRateNumber={courseDetail.currentUserRateNumber}
          teacherId={courseDetail.teacherId}
        />
      </div>
    </div>
  );
};

export { CourseDetailHolder };
