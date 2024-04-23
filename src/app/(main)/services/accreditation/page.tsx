import LandingPageComponent from "@/components/shared/landing-page-component";
import { ACCREDITAION } from "@/constants";
import React from "react";

const page = () => {
 return (
  <div className="w-full h-full">
   <LandingPageComponent
    title={ACCREDITAION.landingComponent.title}
    desc={ACCREDITAION.landingComponent.desc}
   />
  </div>
 );
};

export default page;
