import LandingPageComponent from "@/components/shared/landing-page-component";
import { ASSESSMENT } from "@/constants";
import React from "react";

const page = () => {
 return (
  <div className="w-full h-full">
   <LandingPageComponent
    title={ASSESSMENT.landingComponent.title}
    desc={ASSESSMENT.landingComponent.desc}
   />
  </div>
 );
};

export default page;
