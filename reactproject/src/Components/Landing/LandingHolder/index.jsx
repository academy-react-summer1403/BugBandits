import React, { Fragment } from "react";
import HeroSection from "../HeroSection";
import { NewsSlider } from "../NewsSlider";
import { Category } from "../Category";
import { ServiceSlider } from "../ServiceSlider";
import { Category02 } from "../../Category02";

const LandingHolder = () => {
  return (
    <div className="w-auto h-full border">
      <HeroSection />
      <Category />
      <NewsSlider />
      <Category02 />
      <ServiceSlider />
    </div>
  );
};

export { LandingHolder };
