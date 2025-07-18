import React from "react";
import "../ui/Services.css";
import heroImg from "../assets/heroimg.svg";
import CardSwap, { Card } from "./CardSwap";
import FallingText from "./FallingText";

export default function Services() {
  return (
    <>
      <section className="Services">
        <div></div>
        <div className="servicesText">
          <h1> Card stacks have never looked so good.</h1>

          <p> Just look at it go!</p>
        </div>

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
                  <h3 className="tektur ">Domain Name Ideas</h3>
                  <FallingText
                    className="falling-text montserrat"
                    text={`Instantly create clean, scannable QR codes for links, text, or contact info. Perfect for marketing, sharing, and connecting across platforms.`}
                    highlightWords={[
                      "React",
                      "Bits",
                      "animated",
                      "components",
                      "simplify",
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
                  <h3 className="tektur ">Domain Name Ideas</h3>
                  <FallingText
                    className="falling-text montserrat"
                     text={`Enjoy a seamless experience with fast-loading tools and an easy-to-use interface. No signup required—just enter and get results instantly.`}
                    highlightWords={[
                      "React",
                      "Bits",
                      "animated",
                      "components",
                      "simplify",
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
                  <h3 className="tektur ">Domain Name Ideas</h3>
                  <FallingText
                    className="falling-text montserrat"
                    text={`Instantly create clean, scannable QR codes for links, text, or contact info. Perfect for marketing, sharing, and connecting across platforms.`}
                    highlightWords={[
                      "React",
                      "Bits",
                      "animated",
                      "components",
                      "simplify",
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
      </section>
    </>
  );
}
