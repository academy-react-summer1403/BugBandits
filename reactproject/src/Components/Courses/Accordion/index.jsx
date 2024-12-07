import React, { useEffect, useState } from "react";
import { getCourseCategory } from "../../../Core/Services/api/CourseApi/coursecategory.api";
import { AccordionItem } from "./AccordionItem";
import { getCourseLevel } from "../../../Core/Services/api/CourseApi/courselevel.api";
import { getCourseTypes } from "../../../Core/Services/api/CourseApi/coursetype.api";
import { getTeacherList } from "../../../Core/Services/api/TeachersApi/teachers.api";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const [categories, setCategories] = useState([]);

  const [dataMap, setDataMap] = useState({});

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getData = async () => {
    const list = await getCourseCategory();
    setCategories(list);
  };

  useEffect(() => {
    getData();
  }, []);

  const [level, setLevel] = useState([]);

  const getData2 = async () => {
    const list2 = await getCourseLevel();
    setLevel(list2);
  };

  useEffect(() => {
    getData2();
  }, []);

  const [type, setType] = useState([]);

  const getData3 = async () => {
    const list3 = await getCourseTypes();
    setType(list3);
  };

  useEffect(() => {
    getData3();
  }, []);

  const [teacher, setTeacher] = useState([]);

  const getData4 = async () => {
    const list4 = await getTeacherList();
    setTeacher(list4);
  };

  useEffect(() => {
    getData4();
  }, []);

  const staticTitles = ["دسته بندی", "مرحله", "نحوه برگزاری", "اساتید"];

  return (
    <div className="w-full max-w-md mx-auto">
      <AccordionItem
        title={staticTitles[0]}
        content={categories}
        isOpen={openIndex === 0}
        onToggle={() => toggleItem(0)}
      />
      <AccordionItem
        title={staticTitles[1]}
        content={level}
        isOpen={openIndex === 1}
        onToggle={() => toggleItem(1)}
      />
      <AccordionItem
        title={staticTitles[2]}
        content={type}
        isOpen={openIndex === 2}
        onToggle={() => toggleItem(2)}
      />
      <AccordionItem
        title={staticTitles[3]}
        content={teacher}
        isOpen={openIndex === 3}
        onToggle={() => toggleItem(3)}
      />
    </div>
  );
};

export default Accordion;
