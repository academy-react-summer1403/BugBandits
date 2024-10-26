import React from "react";
import CountUp from "react-countup";

const LandingReportSection = ({
  teacherCount,
  studentCount,
  courseCount,
  newsCount,
}) => {
  return (
    <div
      dir="rtl"
      className="w-11/12 md:w-2/3 h-20 m-auto mb-16 flex md:flex-row gap-10 text-charcoal_gray dark:text-white justify-center text-center"
    >
      <div>
        <CountUp
          start={0}
          end={studentCount}
          delay={1}
          className="text-2xl font-kalamehNum"
        ></CountUp>
        <h1 className="md:text-xl whitespace-pre-line">دانشجو آکادمی</h1>
      </div>
      <div>
        <CountUp
          start={0}
          end={courseCount}
          delay={1}
          className="text-2xl font-kalamehNum"
        ></CountUp>
        <h1 className="md:text-xl whitespace-pre-line">دوره آموزشی</h1>
      </div>
      <div>
        <CountUp
          start={0}
          end={teacherCount}
          delay={1}
          className="text-2xl font-kalamehNum"
        ></CountUp>
        <h1 className="md:text-xl whitespace-pre-line">استاد فعال </h1>
      </div>
      <div>
        <CountUp
          start={0}
          end={newsCount}
          delay={1}
          className="text-2xl font-kalamehNum"
        ></CountUp>
        <h1 className="md:text-xl whitespace-pre-line">رضایتمندی </h1>
      </div>
    </div>
  );
};

export { LandingReportSection };
