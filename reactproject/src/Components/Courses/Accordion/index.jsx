import React, { useEffect, useState } from "react";
import { getCourseCategory } from "../../../Core/Services/api/CourseApi/coursecategory.api";
import { AccordionItem } from "./AccordionItem";

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

  const staticTitles = ["Course Categories", "course", "star", "felan"];

  return (
    <div className="w-full max-w-md mx-auto">
      <AccordionItem
        title={staticTitles[0]}
        content={categories} // Pass the dynamic items from API as content
        isOpen={openIndex === 0}
        onToggle={() => toggleItem(0)}
      />
      <AccordionItem
        title={staticTitles[1]}
        content={categories} // Pass the dynamic items from API as content
        isOpen={openIndex === 1}
        onToggle={() => toggleItem(1)}
      />
      <AccordionItem
        title={staticTitles[2]}
        content={categories} // Pass the dynamic items from API as content
        isOpen={openIndex === 2}
        onToggle={() => toggleItem(2)}
      />
      <AccordionItem
        title={staticTitles[3]}
        content={categories} // Pass the dynamic items from API as content
        isOpen={openIndex === 3}
        onToggle={() => toggleItem(3)}
      />
    </div>
  );
};

export default Accordion;
