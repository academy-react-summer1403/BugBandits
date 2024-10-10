import React from "react";
import { useState, useEffect } from "react";
import axios from "../../../Services/interceptor/index";
import { Card } from "../../CourseCard";

const CourseList = () => {
  const [courseList, setCourseList] = useState(null);
  const [loading, setLoading] = useState(true);
  const getCourseList = async () => {
    try {
      const res = await axios.get(`/Home/GetCoursesTop?Count=5`);
      setCourseList(res.data); // Set the course list from the response
    } catch (error) {
      console.error("Error fetching course list:", error);
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };
  useEffect(() => {
    getCourseList();
  }, []);
  if (loading) {
    return <div>Loading...</div>; // Loading state
  }
  return (
    <div>
      {courseList?.map((item) => (
        <Card
          key={item.id}
          courseId={item.courseId}
          tumbImageAddress={item.tumbImageAddress}
          title={item.title}
          describe={item.describe}
          teacherName={item.teacherName}
          getCourseList={getCourseList}
        />
      ))}
    </div>
  );
};

export { CourseList };
