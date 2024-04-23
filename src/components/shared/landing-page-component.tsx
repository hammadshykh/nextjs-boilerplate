import React from "react";
import Container from "../Layout/Container";

interface landingPageComponentProps {
 title: string;
 desc?: string;
 bgColor?: string;
}

const LandingPageComponent: React.FC<landingPageComponentProps> = ({
 title,
 desc,
 bgColor,
}) => {
 return (
  <div
   className={`w-full text-white items-center h-full flex min-h-[50vh] mb-20 ${
    bgColor ? bgColor : "bg-[#1849A9]"
   }`}
  >
   <Container>
    <div className="xl:p-0 p-5 text-start flex flex-col w-full md:w-[658px] space-y-5">
     <h1 className="font-[700]  text-2xl md:leading-[3.8rem] md:text-[55px]">
      {title}
     </h1>
     <p>{desc}</p>
    </div>
   </Container>
  </div>
 );
};

export default LandingPageComponent;
