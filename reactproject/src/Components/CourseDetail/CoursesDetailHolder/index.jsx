import React, { useEffect, useState } from "react";
import { CourseDetailHeader } from "../CourseDetailHeader";
import { CourseDetailContainer } from "../CourseDetailContainer";
import { getCourseDetail } from "../../../Core/Services/api/CourseApi/coursedetail.api";
import { useParams } from "react-router-dom";

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
    return <div>Loading...</div>;
  }

  if (!courseDetail) {
    return <div>Course not found</div>;
  }

  return (
    <div className="w-5/6 h-[2000px] flex flex-col m-auto mt-20">
      <div>
        <CourseDetailHeader
          cost={courseDetail.cost}
          title={courseDetail.title}
          describe={courseDetail.describe}
          tumbImageAddress={courseDetail.tumbImageAddress}
          courseId={courseDetail.courseId}
        />
      </div>
      <div>
        <CourseDetailContainer />
      </div>
    </div>
  );
};

export { CourseDetailHolder };
