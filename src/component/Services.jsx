import React from "react";
import "../ui/Services.css";
import heroImg from "../assets/heroimg.svg";

export default function Services() {
  return (
    <>
      <section className="Services">
        <span className="pop">
          <img src={heroImg} alt="" />
          <h1>SERVICES</h1>
        </span>
        <div className="ServicesContent">
          <div className="services">
            <h2>QR Code Generator</h2>

            <span className="pan">
              <h3>Create QR Codes in Seconds</h3>
              <p>Share any link using clean, scannable QR codes.</p>
              <ul>
                <li>Perfect for products, events, social media</li>
                <li>Quick and customizable</li>
                <li>Download or copy instantly</li>
              </ul>
            </span>
          </div>
        </div>

        {/*      <div className="servicePage">
            <div>
              <h2>Domain Name Generator</h2>
              <h3>Find the Perfect Domain Name</h3>
              <p>Need a brand name for your startup, blog, or project?</p>
              <ul>
                <li>Type your idea, get creative name suggestions</li>
                <li>Check availability with one click</li>
                <li>Smart and fun to use</li>
              </ul>
            </div>
            </div>
            <div className="servicePage">
            <div>
              <h2>Why Text?</h2>
              <h3>Fast. Free. Frictionless.</h3>
              <p>Text is built for makers, marketers, and dreamers:</p>
              <ul>
                <li>signup or setup</li>
                <li>Clean and focused interface</li>
                <li> Instant results powered by smart tech</li>
              </ul>
            </div>
            </div> */}
      </section>
    </>
  );
}
