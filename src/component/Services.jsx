import React, { useRef } from "react";
import "../ui/Services.css";
import heroImg from "../assets/heroimg.svg";
import CardSwap, { Card } from "./CardSwap";
import FallingText from "./FallingText";
import { useInView, motion } from "framer-motion";

export default function Services() {
  const ref = useRef(null);
  const review = useInView(ref, { once: true });
  return (
    <>
      <section className="Services">
        <div></div>
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={review ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="Accordion-Item"
        >
          <div className="servicesText">
            <h1 className="servicetext">
              Everything You Need to Share Smarter
            </h1>
            <h2 className="help">Everything You Need to Share Smarter</h2>
            <p>
              From generating custom domains to creating beautiful, trackable QR
              codes — we’ve got you cove red.
            </p>
          </div>
        </motion.div>

            <div className="servicesFlex">
          <div className="cardArea">
            <div style={{ height: "600px", position: "relative" }}>
              <CardSwap
                className="card-swap-container"
                cardDistance={60}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={false}
              >
                <Card className="Servicescard">
                  <h3 className="tektur many">
                    {" "}
                    <svg width="20" height="20">
                      <circle cx="10" cy="10" r="8" fill="white" />
                    </svg>
                    Domain Name Ideas
                  </h3>
                  <FallingText
                    className="
                    falling-text montserrat"
                    text={`Get unique, brandable domain name suggestions instantly. Powered by intelligent algorithms to help your brand stand out online.
                    `}
                    highlightWords={[
                      "domain",
                      "brand",
                      "online",
                      "unique",
                      "suggestions",
                    ]}
                    highlightClass="highlighted"
                    trigger="hover"
                    backgroundColor="transparent"
                    wireframes={false}
                    gravity={0.56}
                    fontSize="2rem"
                    mouseConstraintStiffness={0.9}
                  />
                </Card>

                <Card className="Servicescard">
                  <h3 className="tektur many">
                    <svg width="20" height="20">
                      <circle cx="10" cy="10" r="8" fill="white" />
                    </svg>
                    QR Code Generator
                  </h3>
                  <FallingText
                    className="
                    falling-text montserrat"
                    text={`
                    Easily generate stylish QR codes for URLs, text, or contact info. Share your links offline with a scan — fast, reliable, and brand-ready.
                    `}
                    highlightWords={[
                      "QR codes",
                      "scan",
                      "share",
                      "stylish",
                      "generate",
                    ]}
                    highlightClass="highlighted"
                    trigger="hover"
                    backgroundColor="transparent"
                    wireframes={false}
                    gravity={0.56}
                    fontSize="2rem"
                    mouseConstraintStiffness={0.9}
                  />
                </Card>

                <Card className="Servicescard">
                  <h3 className="tektur many">
                    <svg width="20" height="20">
                      <circle cx="10" cy="10" r="8" fill="white" />
                    </svg>
                    No Signup. Just Results.
                  </h3>
                  <FallingText
                    className="falling-text montserrat"
                    text={`
                    No need to log in or create an account. Just enter your text or link, and get a QR code or domain instantly. Fast, free, and simple.
                    `}
                    highlightWords={[
                      "instant",
                      "free",
                      "no signup",
                      "fast",
                      "simple",
                    ]}
                    highlightClass="highlighted"
                    trigger="hover"
                    backgroundColor="transparent"
                    wireframes={false}
                    gravity={0.56}
                    fontSize="2rem"
                    mouseConstraintStiffness={0.9}
                  />
                </Card>
              </CardSwap>
            </div>
          </div>
        </div> 

        <div
          className="
        servicesTextbox
        "
        >
          <ul>
            <li>
              <h3 className="tektur many">
                {" "}
                <svg width="20" height="20">
                  <circle cx="10" cy="10" r="8" fill="white" />
                </svg>
                Domain Name Ideas
              </h3>
              <p>
                {" "}
                Get unique, brandable domain name suggestions instantly. Powered
                by intelligent algorithms to help your brand stand out online.
              </p>
            </li>
            <li>
              <h3 className="tektur many">
                <svg width="20" height="20">
                  <circle cx="10" cy="10" r="8" fill="white" />
                </svg>
                QR Code Generator
              </h3>
              <p>
                Easily generate stylish QR codes for URLs, text, or contact
                info. Share your links offline with a scan — fast, reliable, and
                brand-ready.
              </p>
            </li>
            <li>
              <h3 className="tektur many">
                <svg width="20" height="20">
                  <circle cx="10" cy="10" r="8" fill="white" />
                </svg>
                No Signup. Just Results.
              </h3>
              <p>
                No need to log in or create an account. Just enter your text or
                link, and get a QR code or domain instantly. Fast, free, and
                simple.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
