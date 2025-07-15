import React from "react";
import "../ui/PrivacyPolicyAndTermifuse.css";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <section id="PrivacyPolicy" className="montserrat">
        <p className="old">
          <Link to={"/"}>
            <span>Home</span>{" "}
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
          <span>PrivacyPolicy</span>
        </p>

        <div className="police">
          <div className="policys">
            <div>
              <h3>Effective Date: [8 july 2025]</h3>
              <p>
                This Privacy Policy describes how Text collects, uses, and
                protects your information when you use our platform to generate
                QR codes and personalized domain names.
              </p>
            </div>

            <div>
              <h1>2. How We Use This Data</h1>
              <p>Links you provide for QR generation</p>
              <p>Custom domain names or aliases you create</p>
            </div>
            <div>
              <h1>2. Account Responsibility if applicable</h1>
              <p>To create and display QR codes and domain names</p>
              <p>To let you manage your created resources</p>
              <p>To enhance and analyze the performance of the website</p>
              <p>For legal and abuse prevention</p>
            </div>
            <div>
              <h1>3. Data Protection</h1>
              <p>Your data is stored securely and only accessible by you</p>
              <p>We do not sell or rent your data</p>
            </div>
            <div>
              <h1>4. Third-Party Services Used</h1>
              <p>Firebase Authentication</p>
              <p>Hosting on Vercel</p>
              <p>Analytics tools</p>
            </div>
            <div>
              <h1>5. Your Rights</h1>
              <p>Delete your QR codes or domains at any time</p>
              <p>Request full deletion of your account or data</p>
            </div>

            <div>
              <p>Email: nwosuchinenyenwa4@gmail.com</p>
              <p>Phone: 09061703513</p>
              <p>Address: 10 Calabar Street, Aba, Abia State</p>
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
