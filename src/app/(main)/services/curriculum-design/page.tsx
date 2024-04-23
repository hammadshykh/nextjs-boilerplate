import LandingPageComponent from "@/components/shared/landing-page-component";
import { ACCREDITAION, CURRICULUM } from "@/constants";
import React from "react";

const page = () => {
 return (
  <div className="w-full h-full">
   <LandingPageComponent
    title={CURRICULUM.landingComponent.title}
    desc={CURRICULUM.landingComponent.desc}
   />
  </div>
 );
};

export default page;
