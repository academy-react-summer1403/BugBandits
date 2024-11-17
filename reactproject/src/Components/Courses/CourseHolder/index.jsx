import React, { useEffect, useState } from "react";
import { NavBar } from "../../Common/NavBar";
import FilterSection from "../FilterSection";
import { CourseList } from "../CourseList";
import { DefaultPagination } from "../Pagination";
import { getCourseList } from "../../../Core/Services/api/CourseApi/course";
import { DrawerPlacement } from "../FilterSection/MobileMode";

const CourseHolder = () => {
  const [courseList, setCourseList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const getData = async (pageNum) => {
    setLoading(true);
    const courses = await getCourseList(pageNum, searchQuery);
    setCourseList(courses);
    setLoading(false);
  };

  useEffect(() => {
    getData(1);
  }, [searchQuery]);

  return (
    <div dir="rtl" className="w-full min-h-screen flex flex-col">
      <div className="w-5/6 h-16 m-auto text-cool_blue font-bold text-xl mt-10">
        <h1>دوره ها</h1>
      </div>
      <NavBar setSearchQuery={setSearchQuery} />
      <div className="w-5/6 flex-1 m-auto mt-10 grid lg:grid-cols-[1fr_3fr] md:grid-cols-1 gap-4">
        <FilterSection />
        <div className="h-full">
          <CourseList
            loading={loading}
            courseList={courseList}
            getData={getData}
          />
          <DefaultPagination courseList={courseList} getData={getData} />
        </div>
      </div>
    </div>
  );
};

export { CourseHolder };
