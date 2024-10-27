import React, { useEffect, useState } from "react";
import { getTeacherList } from "../../../Core/Services/api/TeachersApi/teachers.api";
import { TeacherInfoList } from "../TeacherInfoCard";
import { Loading } from "../../Common/Loading";

const TeacherList = () => {
  const [teacherList, setTeacherList] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    setLoading(true);
    const courses = await getTeacherList();
    setTeacherList(courses);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="flex flex-wrap">
      {teacherList.map((item) => (
        <TeacherInfoList
          key={item.teacherId}
          teacherId={item.teacherId}
          fullName={item.fullName}
          pictureAddress={item.pictureAddress}
          courseCounts={item.courseCounts}
        />
      ))}
    </div>
  );
};

export { TeacherList };
