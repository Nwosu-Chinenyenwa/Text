import React, { useRef } from "react";
import Footer from "./component/Footer";
import Img from "./component/Img";
import Contact from "./component/Contact";
import PrivacyPolicy from "./component/PrivacyPolicy";
import Hero from "./component/Hero";
import Nav from "./component/Nav";
import About from "./component/About";
import Qrcode from "./component/Qrcode";
import { useInView, motion } from "framer-motion";
export default function Layout() {
  const ref = useRef(null);
  const review = useInView(ref, { once: true });
  return (
    <>
      <Nav />
      <Hero />
      <div id="about">
      < About  />
      </div>
      <motion.div
      ref={ref}
      initial={{x:-100, opacity:0}}
      animate={review? {x:0, opacity:1}:{}}
      transition={{duration:0.8, ease: "easeInOut"}}
      >
      <Img />
      </motion.div>
      <Qrcode/>
      <Contact />
      <Footer />
    </>
  );
}
