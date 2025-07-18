import React, { useState } from "react";
import "../ui/According.css";
import { section } from "framer-motion/client";

// Accordion Item Component
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Accordion-Item">
      <div onClick={() => setIsOpen((prev) => !prev)}>
        <div className="Accordings">
        <span className="AccordWrite">
          <h4>{title}</h4>
          <h3>{isOpen ? "-" : "+"}</h3>
        </span>
      {isOpen && <p>{content}</p>}
      </div>

      </div>
    </div>
  );
};

// Parent Component
export default function According() {
  const data = [
    {
      title: "What is Text used for?",
      content:
        "Text is a tool that lets you create QR codes for any link and also generate unique and catchy domain names for your projects or businesses.",
    },
    {
      title: "Is it free to generate QR codes?",
      content:
        "Yes! Creating QR codes on Text is completely free and unlimited. Just paste your link and get your QR instantly.",
    },
    {
      title: "Can I download the QR code image?",
      content:
        "Yes, once the QR code is generated, you can download it as a high-quality PNG file for use on flyers, websites, or business cards.",
    },
    {
      title: "How does the domain name generator work?",
      content:
        "The generator uses smart algorithms to suggest brandable and available domain names based on your keyword input.",
    },
    {
      title: "Do you help with domain registration?",
      content:
        "While we suggest names, you’ll be redirected to trusted registrars like Namecheap or GoDaddy to actually purchase the domain.",
    },
  ];

  return (
    <section id="accordion">
    <div className="accordion-container">
      <span className="faqs">
      <h2>FAQs</h2>
      <h1>Common Questions</h1>
      </span>
      {data.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
    </div>
    </section>
  );
}
