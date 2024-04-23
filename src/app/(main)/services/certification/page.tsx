import LandingPageComponent from "@/components/shared/landing-page-component";
import { CERTIFICATION } from "@/constants";
import React from "react";

const page = () => {
 return (
  <div className="w-full h-full">
   <LandingPageComponent
    title={CERTIFICATION.landingComponent.title}
    desc={CERTIFICATION.landingComponent.desc}
   />
  </div>
 );
};

export default page;
