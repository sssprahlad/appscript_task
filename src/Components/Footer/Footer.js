import React from "react";
import "./Footer.css";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="center-container">
      <div className="footer-container">
        <div className="footer-row-alignment">
          <div className="footer-left-part">
            <h2 style={{ color: "#e2777a" }}>Be the first to know</h2>
            <p style={{ color: "#7ec699" }}>
              Sign up for updates from mettā muse.
            </p>
            <div className="Subscribe-container">
              <input type="text" placeholder="Enter your email..." />
              <button>Subscribe</button>
            </div>
          </div>

          <div className="footer-right-part">
            <h2 style={{ color: "#e2777a" }}>Contact Us</h2>
            <h3 style={{ color: "#7ec699", fontSize: "1rem" }}>
              +44 221 133 5360
            </h3>
            <p style={{ color: "#7ec699" }}>customercare@mettamuse.com</p>
            <h1 style={{ color: "#e2777a", fontSize: "1.5rem" }}>Currency</h1>
            <div className="usd-container">
              <p>logo</p>
              <p>USD</p>
            </div>
            <h4 style={{ color: "#7ec699" }}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </h4>
          </div>
        </div>
        <hr />

        <div className="ft-bottom">
          <div className="ft-part-1">
            <h2 style={{ color: "#e2777a" }}>mettā muse</h2>
            <h3>About Us</h3>
            <h3>Stories</h3>
            <h3>Artisans</h3>
            <h3>Boutiques</h3>
            <h3>Boutiques</h3>
            <h3>EU Compliances Docs</h3>
          </div>
          <div className="ft-part-2">
            <h2 style={{ color: "#e2777a" }}>Quick Links</h2>
            <h3>Orders & Shipping</h3>
            <h3>Join/Login as a Seller</h3>
            <h3>Payment & Pricing</h3>
            <h3>Return & Refunds</h3>
            <h3>FAQs</h3>
            <h3>Privacy Policy</h3>
            <h3>Terms & Conditions</h3>
          </div>
          <div className="ft-part-3">
            <h2 style={{ color: "#e2777a" }}>Follow Us</h2>
            <div style={{ display: "flex", gap: "1rem" }}>
              <CiLinkedin  className="social-icon"/>
              <FaInstagram className="social-icon" />
            </div>
            <h3 style={{ color: "#7ec699" }}>mettā muse Accepts</h3>
            <div className="img-container">
              <img
                src="/Images/Group 136194.png"
                className="footer-img"
                alt="icon"
              />
              <img
                src="/Images/Group 136195.svg"
                alt="icon"
                className="footer-img"
              />
              <img
                src="/Images/Rectangle 29404.svg"
                alt="icon"
                className="footer-img"
              />
              <img src="/Images/Vector.svg" alt="icon" className="footer-img" />
              {/* <img src="" alt="icon"/> */}
            </div>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            padding: "1.5rem 0rem",
            color: "#cc99cd",
          }}
        >
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
