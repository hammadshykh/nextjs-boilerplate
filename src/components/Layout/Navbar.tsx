"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { docsConfig } from "@/config/docs";

export function MainNav() {
 const pathname = usePathname();

 return (
  <div className="mr-4 hidden lg:flex">
   <nav className="flex items-center gap-4 text-sm lg:gap-6">
    {docsConfig.mainNav.map((v) => (
     <Link
      key={v.title}
      href={v.href}
      className={cn(
       "transition-colors hover:text-foreground/80 font-[600]",
       pathname === `${v.href}` ? "text-black" : "tex-black"
      )}
     >
      {v.title}
     </Link>
    ))}
   </nav>
  </div>
 );
}
