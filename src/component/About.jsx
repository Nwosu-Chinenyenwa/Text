import React, { useRef } from "react";
import "../ui/About.css";
import heroImg from "../assets/heroimg.svg";
import { useInView, motion } from "framer-motion";
import SplashCursor from "./SplashCursor";

export default function About() {
  const ref = useRef(null);
  const review = useInView(ref, { once: true });

  return (
    <>
      <SplashCursor />
      <section id="about">
        <div className="about roboto">
          <motion.div
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={review ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1>
              We're a creative team focused on building smart, user-friendly
              tools for QR code generation and custom domain creation—designed
              to make sharing and branding easier than ever.
            </h1>
          </motion.div>

          <div className="aboutBox">
            <motion.div
              ref={ref}
              initial={{ x: -100, opacity: 0 }}
              animate={review ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h5>We can help you gain:</h5>
            </motion.div>

            <div className="aboutcard">
              <motion.div
                ref={ref}
                initial={{ x: 0, opacity: 0 }}
                animate={review ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="Acard">
                  <span>
                    <img src={heroImg} alt="QR Code Workflow" />
                    <h3>Smart QR Workflows</h3>
                  </span>
                  <p>
                    Easily create and manage QR codes for your links with our intuitive tools — 
                    perfect for businesses, creators, and marketers looking to boost engagement.
                  </p>
                </div>
              </motion.div>

              <motion.div
                ref={ref}
                initial={{ x: 0, opacity: 0 }}
                animate={review ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="Acard">
                  <span>
                    <img src={heroImg} alt="Domain Generator" />
                    <h3>Catchy Domain Ideas</h3>
                  </span>
                  <p>
                    Get instant, creative domain name suggestions tailored to your brand or business —
                    no more spending hours brainstorming the perfect web identity.
                  </p>
                </div>
              </motion.div>

              <motion.div
                ref={ref}
                initial={{ x: 0, opacity: 0 }}
                animate={review ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="Acard">
                  <span>
                    <img src={heroImg} alt="Link Management" />
                    <h3>Effortless Link Management</h3>
                  </span>
                  <p>
                    Customize, organize, and share your links easily. Connect your QR codes and
                    domains to track user engagement and streamline your online presence.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
