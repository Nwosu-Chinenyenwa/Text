import React from "react";
import "../ui/PrivacyPolicyAndTermifuse.css";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Termofuse() {
  return (
    <>
      <section id="PrivacyPolicy" className="montserrat">
        <p className="old">
          <Link to={"/"}>
            <span className="ac">Home</span>{" "}
          </Link>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
            </svg>
          </span>{" "}
          <span>Term of use</span>
        </p>

        <div className="policy">
          <div className="policys">
            <div>
              <h1>Terms of Use</h1>
              <p>
                By using NcManus QR Platform, you agree to these Terms of Use.
              </p>
            </div>

            <div>
              <h1>1. Use of the Service</h1>
              <p>
                You may generate QR codes and custom domains only for lawful
                content.
              </p>
              <p>No spam, phishing, or malware links are allowed.</p>
            </div>
            <div>
              <h1>2. Account Responsibility if applicable</h1>
              <p>You’re responsible for safeguarding your login credentials.</p>
              <p>We reserve the right to suspend accounts involved in abuse.</p>
            </div>
            <div>
              <h1>3. Domain and QR Code Usage</h1>
              <p>
                You may not impersonate or misuse brand names via custom
                domains.
              </p>
              <p>
                We reserve the right to revoke or disable abusive links or QR
                codes.
              </p>
            </div>
            <div>
              <h1>4. Liability</h1>
              <p>
                We are not liable for content stored in QR codes or short
                domains.
              </p>
              <p>Use the platform at your own risk.</p>
            </div>
            <div>
              <h1>5. Changes to Terms</h1>
              <p>
                These Terms may change. You will be notified of major changes.
              </p>
            </div>
            <div>
              <h1>4. Governing Law</h1>
              <p>These terms are governed by the laws of Nigeria.</p>
            </div>
          </div>
        </div>
        <hr />
        <Footer />
      </section>
      <Outlet />
    </>
  );
}
