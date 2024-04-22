import { Button } from "@/components/ui/button";
import {
 Popover,
 PopoverContent,
 PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import React from "react";

interface PopoverProps {
 children: React.ReactNode;
 icon: React.ReactNode;
 className?: string;
}

const HrmPopover: React.FC<PopoverProps> = ({ children, icon, className }) => {
 return (
  <Popover>
   <PopoverTrigger asChild>
    <Button variant="none" className="px-0">
     {icon}
    </Button>
   </PopoverTrigger>
   <PopoverContent className={cn("w-64 rounded-xl p-3", className)}>
    {children}
   </PopoverContent>
  </Popover>
 );
};

export default HrmPopover;
