"use client";

import React from "react";

interface MainLayoutProps {
 children: React.ReactNode;
}

// main layout

const MainLayoutPage: React.FC<MainLayoutProps> = ({ children }) => {
 return (
  <>
   <div className="bg-black">{children}</div>
  </>
 );
};

export default MainLayoutPage;
