import React from "react";
import { MainNav } from "./Navbar";
import { MobileNav } from "./MobileNavbar";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/Common/ThemeModeButton";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import Icons from "../ui/icons";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

interface HeaderProps {
 children: React.ReactNode;
}

const Header: React.FC = () => {
 return (
  <>
   <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="flex h-16 max-w-screen-2xl justify-between w-full items-center">
     <div className="hidden md:block">
      <Link href="/" className="mr-6 flex items-center space-x-2">
       <div className="w-[90px]">
        <AspectRatio>
         <Image
          fill
          src={siteConfig.logo}
          alt="Image"
          className="rounded-md object-cover hidden font-bold md:inline-block"
         />
        </AspectRatio>
       </div>
      </Link>
     </div>
     <div className="flex -ms-8 items-center space-x-2 justify-center self-center">
      <MainNav />
     </div>
     <MobileNav />
     <div className="flex  items-center justify-between space-x-2 md:justify-end">
      {/* <div className="w-full flex-1 md:w-auto md:flex-none">
       <CommandMenu />
      </div> */}
      <nav className="flex items-center space-x-4">
       <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <Button
         variant="none"
         className="bg-blue-800 text-white hover:bg-blue-900"
        >
         Get Accredited
        </Button>
       </Link>
       <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
        <Button
         variant="none"
         className="bg-rose-800 text-white hover:bg-rose-900"
        >
         log in
        </Button>
       </Link>
       <ModeToggle />
      </nav>
     </div>
    </div>
   </header>
  </>
 );
};

export default Header;
