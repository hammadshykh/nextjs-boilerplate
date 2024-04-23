import BecomeAtp from "@/components/modules/become-atp/becom-atp";
import LandingPageComponent from "@/components/shared/landing-page-component";
import { PARTNER_VERIFICATION } from "@/constants";
import React from "react";

const page = () => {
 return (
  <div className="w-full h-full">
   <LandingPageComponent
    title={PARTNER_VERIFICATION.landingComponent.title}
    bgColor="bg-rose-800"
   />
   <BecomeAtp />
  </div>
 );
};

export default page;
