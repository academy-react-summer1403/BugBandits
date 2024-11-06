import React, { useEffect, useState } from "react";
import { NavBar } from "../../Common/NavBar";
import FilterSection from "../FilterSection";
import { CourseList } from "../CourseList";
import { DefaultPagination } from "../Pagination";
import { getCourseList } from "../../../Core/Services/api/CourseApi/course";
import { AddCourseLike } from "../../../Core/Services/api/CourseApi/likecourse";
import { useParams } from "react-router-dom";

const CourseHolder = () => {
  const [courseList, setCourseList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [SearchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    if (e.target.value) {
      setSearchQuery(`&Query=${e.target.value}`);
    }
  };

  const getData = async (pageNum) => {
    setLoading(true);
    const courses = await getCourseList(pageNum, SearchQuery);
    setCourseList(courses);
    setLoading(false);
  };

  useEffect(() => {
    getData(1);
  }, []);

  return (
    <div dir="rtl" className="w-full h-auto mb-[550px]">
      <div className="w-5/6 h-16 m-auto text-cool_blue font-bold text-xl mt-10">
        <h1>دوره ها</h1>
      </div>
      <div>
        <NavBar />
      </div>
      <div className="w-5/6 h-[1000px] m-auto mt-10 grid grid-cols-[1fr_3fr]">
        <FilterSection />
        <div className="h-full">
          <CourseList
            loading={loading}
            courseList={courseList && courseList}
            getData={getData}
          />
          <DefaultPagination courseList={courseList} getData={getData} />
        </div>
      </div>
    </div>
  );
};

export { CourseHolder };
