import React, { useRef } from "react";
import Footer from "./component/Footer";
import Img from "./component/Img";
import Contact from "./component/Contact";
import PrivacyPolicy from "./component/PrivacyPolicy";
import Hero from "./component/Hero";
import Nav from "./component/Nav";
import About from "./component/About";
import Qrcode from "./component/Qrcode";
import Services from "./component/Services";
import According from "./component/According";
export default function Layout() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <According/>
      {/*  <Services/> */}
      <Img />
      {/* <Qrcode /> */}
      <Contact />
      <Footer />
    </>
  );
}
