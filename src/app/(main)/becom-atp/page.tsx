import BecomeAtp from "@/components/modules/become-atp/becom-atp";
import LandingPageComponent from "@/components/shared/landing-page-component";
import { BECOM_ATP } from "@/constants";
import React from "react";

const page = () => {
 return (
  <div className="w-full h-full">
   <LandingPageComponent
    title={BECOM_ATP.landingComponent.title}
    desc={BECOM_ATP.landingComponent.desc}
    bgColor="bg-rose-800"
   />
   <BecomeAtp />
  </div>
 );
};

export default page;
