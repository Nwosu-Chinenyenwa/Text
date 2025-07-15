import React, { useRef } from "react";
import "../ui/About.css";
import heroImg from "../assets/heroimg.svg";
import { useInView, motion } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const review = useInView(ref, { once: true });
  return (
    <>
      <section id="about">
        <div className="about roboto">
          <motion.dev
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
          </motion.dev>
          <div className="aboutBox">
            <motion.dev
              ref={ref}
              initial={{ x: -100, opacity: 0 }}
              animate={review ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h5>We can help you gain:</h5>
            </motion.dev>
            <div className="aboutcard">
              <motion.dev
                ref={ref}
                initial={{ x: 0, opacity: 0 }}
                animate={review ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="Acard">
                  <span>
                    <img src={heroImg} alt="" /> <h3>Clear Workflows</h3>
                  </span>
                  <p>
                    Our experts will help you plan and implement clear briefing
                    and development workflows, ensuring consistency across
                    projects.
                  </p>
                </div>
              </motion.dev>
              <motion.dev
                ref={ref}
                initial={{ x: 0, opacity: 0 }}
                animate={review ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="Acard">
                  <span>
                    <img src={heroImg} alt="" /> <h3>Clear Workflows</h3>
                  </span>
                  <p>
                    Our experts will help you plan and implement clear briefing
                    and development workflows, ensuring consistency across
                    projects.
                  </p>
                </div>
              </motion.dev>
              <motion.dev
                ref={ref}
                initial={{ x: 0, opacity: 0 }}
                animate={review ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="Acard">
                  <span>
                    <img src={heroImg} alt="" /> <h3>Clear Workflows</h3>
                  </span>
                  <p>
                    Our experts will help you plan and implement clear briefing
                    and development workflows, ensuring consistency across
                    projects.
                  </p>
                </div>
              </motion.dev>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
