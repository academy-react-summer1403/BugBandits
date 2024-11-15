import React, { useEffect } from "react";
import { NavBarDetail } from "../NavBarDetail";
import { TeacherList } from "../TeachersList";

const TeacherHolder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div dir="rtl" className="w-5/6 h-auto m-auto">
      <div className="w-full h-auto rounded-xl bg-white dark:bg-midnight_blue mt-10">
        <NavBarDetail />
      </div>
      <div className="w-full h-auto mt-10">
        <TeacherList />
      </div>
    </div>
  );
};

export { TeacherHolder };
