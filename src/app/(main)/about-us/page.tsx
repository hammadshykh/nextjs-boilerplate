import LandingPageComponent from "@/components/shared/landing-page-component";
import { ABOUT_US } from "@/constants";
import React from "react";

const page = () => {
 return (
  <div className="w-full h-full">
   <LandingPageComponent
    title={ABOUT_US.landingComponent.title}
    desc={ABOUT_US.landingComponent.desc}
   />
  </div>
 );
};

export default page;
