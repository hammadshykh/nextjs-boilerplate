import React from "react";
import AtpForm from "./atp-form";
import Container from "@/components/Layout/Container";

const BecomeAtp: React.FC = () => {
 return (
  <div className="w-full h-full">
   <Container>
    <div className="flex justify-center">
     <div className="w-full flex flex-col space-y-10 py-5 md:px-16">
      <h1 className="text-center font-[700] text-2xl leading-10 md:text-[40px]">
       Accrediting Training Providers: Ensuring Quality Education for All
      </h1>
      <p className="text-center text-[#000000] leading-6 font-[500]">
       At Skill Development Council USA, we offer a comprehensive service to
       evaluate and accredit training organizations and institutions as Approved
       Training Partners (ATP). Being recognized as an ATP by Skill Development
       Council USA signifies your commitment to providing high-quality training
       programs and aligning with industry standards.
      </p>
      <AtpForm />
     </div>
    </div>
   </Container>
  </div>
 );
};

export default BecomeAtp;
