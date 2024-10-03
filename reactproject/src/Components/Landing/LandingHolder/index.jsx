import React, { Fragment } from "react";
import MainLayout from "../../../app/MainLayout";
import LandingBg from "./../../../assets/images/landigbg.svg";
import HeroSection from "../HeroSection";

const LandingHolder = () => {
  return (
    <div className="w-auto h-full border">
      <HeroSection />
    </div>
  );
};

export { LandingHolder };
