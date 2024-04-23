import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Container from "./Container";

const Layout = ({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) => {
 return (
  <div>
   <Container>
    <Header />
   </Container>
   <div className="w-full h-ful">{children}</div>
   <Footer />
  </div>
 );
};

export default Layout;
