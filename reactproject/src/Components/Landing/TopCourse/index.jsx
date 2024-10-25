import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Card } from "../../CourseCard";
import { getCourseList } from "../../../Core/Services/api/CourseApi/course";

const Example = () => {
  const exampleRef = useRef(null);
  const [courseList, setCourseList] = useState([]);

  const getData = async () => {
    const courses = await getCourseList();
    setCourseList(courses);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleWheel = (event) => {
    // Prevent default vertical scroll behavior
    event.preventDefault();
    // Scroll horizontally based on the vertical scroll amount
    exampleRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const exampleElement = exampleRef.current;

    if (exampleElement) {
      exampleElement.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (exampleElement) {
        exampleElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel courseList={courseList} ref={exampleRef} />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = React.forwardRef(({ courseList }, ref) => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section
      ref={ref}
      className="relative h-[300vh] bg-neutral-900 overflow-x-auto"
    >
      <div className="flex gap-4" style={{ overflowX: "auto" }}>
        <motion.div style={{ x }} className="flex">
          {courseList?.map((item) => (
            <Card
              key={item.courseId}
              courseId={item.courseId}
              tumbImageAddress={item.tumbImageAddress}
              title={item.title}
              cost={item.cost}
              describe={item.describe}
              teacherName={item.teacherName}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default Example;
