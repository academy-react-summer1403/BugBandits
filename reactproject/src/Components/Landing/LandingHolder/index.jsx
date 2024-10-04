import React, { Fragment } from "react";
import HeroSection from "../HeroSection";
import { NewsSlider } from "../NewsSlider";
import { Category } from "../Category";
import {ServiceSlider} from "../ServiceSlider";

const LandingHolder = () => {
  return (
    <div className="w-auto h-full border">
      <HeroSection />
      <Category />
      <NewsSlider />
      <Category />
      <ServiceSlider />
    </div>
  );
};

export { LandingHolder };
