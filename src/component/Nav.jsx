import React, { useState } from "react";
import "../ui/Nav.css";
import NavImg from "../assets/heroimg.svg";
import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  const [menu, setmenu] = useState(false);
  return (
    <>
      {menu && (
        <section className="menu" onClick={() => setmenu(false)}>
          <div className="menuNav montserrat" onClick={() => setmenu(true)}>
            <h1 onClick={() => setmenu(false)}>
              close{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
              </svg>
            </h1>

            <ul>
              <Link to={"/"}>
                <li>
                  <span></span> home
                </li>
              </Link>
              <li>
                <span></span>about us
              </li>
              <li>
                <span></span>Connected Acceleration™
              </li>
              <li>
                <span></span>Investment strategy
              </li>
              <li>
                <span></span>Investments
              </li>
              <li>
                <span></span>Sustainability
              </li>
            </ul>
          </div>
        </section>
      )}

      <nav className="montserrat">
        <div className="nav-menu" onClick={() => setmenu(true)}>
          <svg width="20" height="20">
            <circle cx="10" cy="10" r="8" fill="white" />
          </svg>
          <h2>Menu</h2>
        </div>
        <img src={NavImg} alt="NavImg" />
        <div className="nav-contact">
          <h2>Contact us </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"></path>
          </svg>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
