// Home page

import Container from "@/components/Layout/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
 return (
  <>
   <div>
    <div
     className={`w-full  items-center h-full relative flex min-h-[100vh] mb-20 bg-[url('/images/homeLandingPage.jpg')] bg-cover bg-center`}
    >
     <Container>
      <div className="bg-[#0008] absolute top-0 left-0 w-full h-[100vh]"></div>
      <div className="xl:p-0 p-5 relative z-10 text-start flex flex-col w-full md:w-[658px] space-y-5 text-white">
       <h1 className="font-[700]  text-2xl md:leading-[3.8rem] md:text-[55px]">
        Empowering Training Providers with Global Accreditation
       </h1>
       <p>
        We are a global accreditation body specialized in accrediting training
        providers, assessing courses, developing curriculum, and providing
        certifications. Our mission is to enhance the quality and credibility of
        training and education worldwide.
       </p>
       <Link href="" target="_blank" rel="noreferrer">
        <Button
         variant="none"
         className="bg-blue-800 text-white hover:bg-blue-900"
        >
         Become Approved Training Partner
        </Button>
       </Link>
      </div>
     </Container>
    </div>
    <Container>
     <div>
      <h1 className="text-center">Home Page</h1>
     </div>
    </Container>
   </div>
  </>
 );
}
