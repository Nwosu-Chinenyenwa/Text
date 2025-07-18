import React, { useRef } from "react";
import Footer from "./component/Footer";
import Img from "./component/Img";
import Contact from "./component/Contact";
import PrivacyPolicy from "./component/PrivacyPolicy";
import Hero from "./component/Hero";
import Nav from "./component/Nav";
import About from "./component/About";
import Qrcode from "./component/Qrcode";
import According from "./component/According";
import Blog from "./component/Blog";
import Services from "./component/Services";
import Domain from "./component/Domain";
export default function Layout() {
  return (
    <>
      <Nav />
      <Hero />
      <Domain />
      <About />
      <According />
      <Blog />
      <Services />
      <Qrcode />
      <Img />
      <Contact />
      <Footer />
    </>
  );
}
