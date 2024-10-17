import React from "react";
import { NavBarDetail } from "../NavBarDetail";
import { TeacherList } from "../TeachersList";

const TeacherHolder = () => {
  return (
    <div dir="rtl" className="w-5/6 h-auto m-auto">
      <div></div>
      <div className="mb-5">
        <h1 className="text-xl text-oce text-cool_blue">اساتید</h1>
      </div>
      <div className="w-full h-auto rounded-xl bg-white">
        <NavBarDetail />
      </div>
      <div className="w-full h-auto mt-10 mr-16">
        <TeacherList />
      </div>
    </div>
  );
};

export { TeacherHolder };
