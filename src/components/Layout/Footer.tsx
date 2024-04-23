import React from "react";
import Container from "./Container";
import { FOOTER } from "@/constants";
import Link from "next/link";

interface FooterProps {
 children: React.ReactNode;
}

const Footer: React.FC = () => {
 return (
  <div className="w-full bg-[#1849A9] text-white items-center h-full flex py-20  min-h-[50vh]">
   <Container>
    <div className="flex md:flex-row justify-between items-center flex-col w-full pb-20 border-white border-b-2">
     <div className="flex flex-col space-y-4">
      <div>
       <h4 className="mb-3 font-semibold">Address:</h4>
       <p>{FOOTER.content.address}</p>
      </div>
      <div>
       <h4 className="mb-3 font-semibold">Contact:</h4>
       <p className="my-2 underline">{FOOTER.content.contact}</p>
       <p className="underline">{FOOTER.content.email}</p>
      </div>
     </div>
     <div className="flex items-center justify-between w-[400px]">
      <div className="flex gap-3 flex-col w-full">
       <Link href="#">Link one</Link>
       <Link href="#">Link two</Link>
       <Link href="#">Link three</Link>
       <Link href="#">Link four</Link>
       <Link href="#">Link five</Link>
      </div>
      <div className="flex gap-3 flex-col w-full">
       <Link href="#">Link one</Link>
       <Link href="#">Link two</Link>
       <Link href="#">Link three</Link>
       <Link href="#">Link four</Link>
       <Link href="#">Link five</Link>
      </div>
     </div>
    </div>
    <div className="flex md:flex-row justify-between items-center flex-col w-full mt-10">
     <div>
      <p>{FOOTER.content.copyRight}</p>
     </div>
     <div className="flex gap-3">
      <Link className="underline" href="#">
       Privacy Policy
      </Link>
      <Link className="underline" href="#">
       Terms of Service
      </Link>
      <Link className="underline" href="#">
       Cookies Settings
      </Link>
     </div>
    </div>
   </Container>
  </div>
 );
};

export default Footer;
