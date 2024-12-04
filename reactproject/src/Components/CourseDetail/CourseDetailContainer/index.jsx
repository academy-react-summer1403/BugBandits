import React from "react";
import { CourseDetailAccordion } from "../CourseDetailAccordion";
import { useSelector } from "react-redux";
import { Description } from "../Description";
import { TeacherSection } from "../TeacherSection";
import { MoreInfo } from "../MoreInformation";
import { ReserveButton } from "../ReserveButton";
import { SuggestionTab } from "../SuggestionTab";
import { useNavigate, useParams } from "react-router-dom";
import { courseReserve } from "../../../Core/Services/api/CourseApi/reservecourse";

const CourseDetailContainer = ({
  endTime,
  startTime,
  teacherName,
  currentRate,
  cost,
  capacity,
  currentRegistrants,
  describe,
  courseLevelName,
  courseStatusName,
  teacherId,
}) => {
  const darkMode = useSelector((state) => state.darkMode.value);

  const { courseId } = useParams();

  const postData = async (id) => {
    try {
      const courses = await courseReserve(id);
      console.log("Courses reserved:", courses);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  const handleOnclick = () => {
    postData(courseId.courseId);
  };

  return (
    <div
      dir="rtl"
      className={`${
        darkMode ? "dark" : ""
      } grid md:grid-cols-6 md:gap-5 w-full h-auto mt-10 grid-cols-1 `}
    >
      <div className="col-span-4">
        <div>
          <Description describe={describe} />
        </div>
        <div>
          <CourseDetailAccordion />
        </div>
        <div className="w-full h-auto bg-white dark:bg-midnight_blue rounded-2xl ">
          <SuggestionTab />
        </div>
      </div>
      <div className="col-span-2">
        <div>
          <TeacherSection teacherName={teacherName} teacherId={teacherId} />
        </div>
        <div>
          <MoreInfo
            cost={cost}
            courseLevelName={courseLevelName}
            courseStatusName={courseStatusName}
            startTime={startTime}
            endTime={endTime}
            currentRate={currentRate}
            capacity={capacity}
            currentRegistrants={currentRegistrants}
          />
        </div>
        <div>
          <ReserveButton handleOnclick={handleOnclick} />
        </div>
      </div>
    </div>
  );
};

export { CourseDetailContainer };
