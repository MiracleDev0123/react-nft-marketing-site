import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTopButton";
import Navbar from "./Header";
import Footer from "./Footer";
import ContactForm from "./Contact/ContactForm";
import Box from "./common/Box";
import Image from "./common/Image";
import Bg1 from "../assets/images/bg1.png";
import Bg2 from "../assets/images/bg2.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <Box cssClasses={["site-container"]}>
      <Image src={Bg1} cssClasses={["background-1"]} />
      <Image src={Bg2} cssClasses={["background-2"]} />
      <Navbar />
      {children}
      <ContactForm />
      <Footer />
      <ScrollToTopButton />
    </Box>
  );
};

export default Layout;
