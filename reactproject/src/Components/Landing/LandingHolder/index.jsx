import React, { Fragment } from "react";
import HeroSection from "../HeroSection";
import { CourseHolder } from "../../Courses/CourseHolder";
import { NewsSlider } from "../NewsSlider";

const LandingHolder = () => {
  return (
    <div className="w-auto h-full border">
      <HeroSection />
      <CourseHolder />
      <NewsSlider />
    </div>
  );
};

export { LandingHolder };
