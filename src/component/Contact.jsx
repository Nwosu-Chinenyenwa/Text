import React from "react";
import "../ui/Contact.css";

export default function Contact() {
  return (
    <section className="contact-form">
      <div className="form">
        <div className="form-write">
          <h1 className=" montserrat">contact us</h1>
          <p>
            <em>Lorem ipsum dolor sit amet consectetur.</em>
          </p>
        </div>

        <form>
          <div className="form-container">
            <div className="form-input">
              <input type="text" placeholder="Your Name*" required/>
              <input type="email" placeholder="Your Email*" required/>
              <input type="number" placeholder="Your Phone" required/>
            </div>

            <textarea name="" id="" placeholder="Your Message*" required></textarea>
          </div>

          <button type="submit" className="input-button" >send message</button>
        </form>
      </div>
    </section>
  );
}
