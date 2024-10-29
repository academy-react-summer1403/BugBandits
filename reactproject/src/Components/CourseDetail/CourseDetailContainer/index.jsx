import React from "react";
import { CourseDetailAccordion } from "../CourseDetailAccordion";
import { useSelector } from "react-redux";
import { Description } from "../Description";
import { WriteSuggestion } from "../WriteSuggestion";
import { TeacherSection } from "../TeacherSection";
import { MoreInfo } from "../MoreInformation";
import { ReserveButton } from "../ReserveButton";
import { SuggestionTab } from "../SuggestionTab";
import { useNavigate } from "react-router-dom";

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
  teacherId
}) => {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <div
      dir="rtl"
      className={`${
        darkMode ? "dark" : ""
      } grid grid-cols-6 gap-5 w-full h-auto mt-10`}
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
          <ReserveButton />
        </div>
      </div>
    </div>
  );
};

export { CourseDetailContainer };
