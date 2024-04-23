"use client";

import Layout from "@/components/Layout";
import React from "react";

interface MainLayoutProps {
 children: React.ReactNode;
}

// main layout

const MainLayoutPage: React.FC<MainLayoutProps> = ({ children }) => {
 return (
  <>
   <Layout>{children}</Layout>
  </>
 );
};

export default MainLayoutPage;
