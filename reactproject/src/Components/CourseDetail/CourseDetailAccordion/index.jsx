import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { VscPlayCircle } from "react-icons/vsc";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        open.includes(id) ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const CourseDetailAccordion = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const [open, setOpen] = useState([]);
  const handleOpen = (value) => {
    setOpen((event) => {
      const newIems = [...event];
      if (newIems.includes(value)) {
        newIems.splice(newIems.indexOf(value), 1);
      } else {
        newIems.push(value);
      }
      return newIems;
    });
  };
  const AccordionItem = [
    {
      number: 1,
      title: "آشنایی با دوره",
    },
    {
      number: 2,
      title: "فصل صفرم: مفاهیم برنامه نویسی ",
    },
    {
      number: 3,
      title: "فصل یکم: نصب و راه اندازی",
    },
  ];
  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } w-full h-auto rounded-3xl bg-white mt-4 md:mt-8 p-5 md:p-10 dark:bg-midnight_blue`}
    >
      {AccordionItem.map((item, index) => (
        <Accordion
          key={index}
          open={open.includes(index)}
          animate={CUSTOM_ANIMATION}
          icon={<Icon id={index} open={open} />}
        >
          <AccordionHeader
            onClick={() => handleOpen(index)}
            className={`font-iranSans mt-5 px-4 py-2 text-sm md:text-lg rounded-t-lg dark:text-white ${
              open.includes(index)
                ? "bg-ocean_blue text-white"
                : "text-[#8d8d8d]"
            }`}
          >
            {item.title}
          </AccordionHeader>
          <AccordionBody className="bg-[#f3f4f6] dark:bg-[#353C4B] text-sm p-3 md:p-4 rounded-b-lg flex flex-row">
            <div className="w-full flex flex-row gap-3">
              <div className=" w-10 h-10 bg-white dark:bg-[#4A505D] rounded-md flex items-center justify-center  font-kalamehNum">
                {item.number}
              </div>
              <span className="font-iranSans md:whitespace-nowrap whitespace-normal pt-3">
                {item.title}
              </span>
            </div>
            <div dir="ltr" className="w-1/2 flex flex-row items-center gap-1">
              <VscPlayCircle className="w-6 h-6" />
              <span>8:30</span>
            </div>
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};

export { CourseDetailAccordion };
