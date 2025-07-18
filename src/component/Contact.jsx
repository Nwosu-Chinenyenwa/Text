import React from "react";
import "../ui/Contact.css";

export default function Contact() {
  return (
    <section className="contact-form" id="contact">
      <div className="form">
        <div className="form-write">
          <h1 className=" montserrat">contact us</h1>
          <p>
            <em>We’re here to help. Send us a message anytime.</em>
          </p>
        </div>

        <form action="https://formspree.io/f/mwplwlbd" method="POST">
          <div className="form-container">
            <div className="form-input">
              <input
                type="text"
                placeholder="Your Name*"
                required
                name="Name"
              />
              <input
                type="email"
                placeholder="Your Email*"
                required
                name="Email"
              />
              <input
                type="number"
                placeholder="Your Phone"
                required
                name="Number"
              />
            </div>

            <textarea
              name="messages"
              className=""
              placeholder="Your Message*"
              required
            ></textarea>
          </div>

          <button type="submit" className="input-button">
            send message
          </button>
        </form>
      </div>
    </section>
  );
}
