import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

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
        id === open ? "rotate-180" : ""
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
  const [open, setOpen] = React.useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
    setIsActive(!isActive);
  };

  return (
    <div className="w-full h-auto rounded-3xl bg-white mt-8 p-10">
      <Accordion
        open={open === 1}
        animate={CUSTOM_ANIMATION}
        icon={<Icon id={1} open={open} />}
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`px-4 py-2 text-[#8d8d8d] text-lg rounded-t-lg ${
            isActive ? "bg-ocean_blue text-white " : ""
          }`}
        >
          آشنایی با دوره
        </AccordionHeader>
        <AccordionBody></AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        animate={CUSTOM_ANIMATION}
        icon={<Icon id={2} open={open} />}
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`px-4 py-2 text-[#8d8d8d] text-lg rounded-t-lg ${
            isActive ? "bg-ocean_blue  " : ""
          }`}
        >
          فصل صفرم: مفاهیم برنامه نویسی وب (فقط برای مبتدی ها)
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        animate={CUSTOM_ANIMATION}
        icon={<Icon id={3} open={open} />}
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`px-4 py-2 text-[#8d8d8d] text-lg rounded-t-lg ${
            isActive ? "bg-ocean_blue  " : ""
          }`}
        >
          فصل یکم: نصب و راه اندازی
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export { CourseDetailAccordion };
