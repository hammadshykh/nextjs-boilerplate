"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
 Tooltip,
 TooltipContent,
 TooltipProvider,
 TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "./button";
import { usePathname } from "next/navigation";

interface NavProps {
 isCollapsed: boolean;
 links: {
  link: string;
  title: string;
  label?: string;
  icon: LucideIcon;
  variant: "default" | "ghost";
 }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
 const pathname = usePathname();

 return (
  <div
   data-collapsed={isCollapsed}
   className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2 w-full"
  >
   <TooltipProvider>
    <nav className="grid gap-3 px-2 lg:group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
     {links.map((link, index) =>
      isCollapsed ? (
       <Tooltip key={index} delayDuration={0}>
        <TooltipTrigger asChild>
         <Link
          href={link.link}
          className={cn(
           buttonVariants({
            variant: link.link === pathname ? "default" : "ghost",
            size: "icon",
           }),
           "h-12 w-9",
           link.variant === "default" &&
            "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
          )}
         >
          <link.icon className="h-4 w-4 text-blue-500 font-bold" />
          <span className="sr-only">{link.title}</span>
         </Link>
        </TooltipTrigger>
        <TooltipContent side="right" className="flex items-center gap-4">
         {link.title}
         {link.label && (
          <span className="ml-auto text-muted-foreground">{link.label}</span>
         )}
        </TooltipContent>
       </Tooltip>
      ) : (
       <Link
        key={index}
        href={link.link}
        className={cn(
         buttonVariants({
          variant: link.link === pathname ? "default" : "ghost",
          size: "sm",
         }),
         link.variant === "default" &&
          "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
         "justify-start h-10 w-full"
        )}
       >
        <link.icon className="mr-3 h-5 w-5 text-blue-500 font-bold" />
        {link.title}
        {link.label && (
         <span
          className={cn(
           "ml-auto",
           link.variant === "default" && "text-background dark:text-white"
          )}
         >
          {link.label}
         </span>
        )}
       </Link>
      )
     )}
    </nav>
   </TooltipProvider>
  </div>
 );
}
