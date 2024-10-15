import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";

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
  //   const [isActive, setIsActive] = useState(false);

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

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } w-full h-auto rounded-3xl bg-white mt-8 p-10 dark:bg-midnight_blue`}
    >
      <Accordion
        open={open.includes(1)}
        animate={CUSTOM_ANIMATION}
        icon={<Icon id={1} open={open} />}
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`px-4 py-2 text-[#8d8d8d] dark:text-white text-lg rounded-t-lg ${
            open.includes(1) ? "bg-ocean_blue text-white " : ""
          }`}
        >
          آشنایی با دوره
        </AccordionHeader>
        <AccordionBody></AccordionBody>
      </Accordion>
      <Accordion
        open={open.includes(2)}
        animate={CUSTOM_ANIMATION}
        icon={<Icon id={2} open={open} />}
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`px-4 py-2 text-[#8d8d8d] dark:text-white text-lg rounded-t-lg ${
            open.includes(2) ? "bg-ocean_blue text-white " : ""
          }`}
        >
          فصل صفرم: مفاهیم برنامه نویسی وب (فقط برای مبتدی ها)
        </AccordionHeader>
        <AccordionBody></AccordionBody>
      </Accordion>
      <Accordion
        open={open.includes(3)}
        animate={CUSTOM_ANIMATION}
        icon={<Icon id={3} open={open} />}
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`px-4 py-2 text-[#8d8d8d] dark:text-white text-lg rounded-t-lg ${
            open.includes(3) ? "bg-ocean_blue text-white " : ""
          }`}
        >
          فصل یکم: نصب و راه اندازی
        </AccordionHeader>
        <AccordionBody></AccordionBody>
      </Accordion>
    </div>
  );
};

export { CourseDetailAccordion };
