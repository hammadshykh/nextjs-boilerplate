import React from "react";

import { Headers } from "react-csv/lib/core";

import { CSVLink } from "react-csv";
import { Button, buttonVariants } from "./button";

import Icons from "./icons";
import { cn } from "@/lib/utils";

const ExportCSV = ({
 headers,
 data = [],
 filename,
 children,
}: {
 data: {}[];
 headers?: Headers | undefined;
 filename?: string | undefined;
 children?: React.ReactNode;
}) => {
 const defaultFilename = `reimeter_data_${new Date()
  .toISOString()
  .slice(0, 10)}`;

 return (
  !!data.length && (
   <CSVLink
    data={data}
    headers={headers ? headers : Object.keys(data[0])}
    filename={filename ? filename : defaultFilename}
    className={cn("gap-2", buttonVariants({ variant: "outline" }))}
   >
    {children ? children : <Icons.Download className="h-5 w-5" />}
    Export as CSV{" "}
   </CSVLink>
  )
 );
};

export default ExportCSV;
