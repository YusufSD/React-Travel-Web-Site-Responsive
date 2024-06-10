import React from "react";
import "../styles/Footer.css";
import { Buttons } from "./Buttons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subs">
        <p className="footer-heading">Sign up now for the best holiday deals</p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              type="email"
              name="email"
              placeholder="Email"
            />
            <Buttons buttonStyle="btn--outline">Subscribe</Buttons>
          </form>
        </div>
      </section>
      <section className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Invertors</Link>
            <Link to="/">Terms of Services</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Videos</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">İnstagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">X</Link>
          </div>
        </div>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <i className="fa-solid fa-globe"></i> TRAVEL
            </Link>
          </div>
          <small className="website-rights">TRAVEL © 2024</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="-blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="-blank"
              aria-label="instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="-blank"
              aria-label="youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              className="social-icon-link x"
              to="/"
              target="-blank"
              aria-label="x"
            >
              <i className="fab fa-x"></i>
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="-blank"
              aria-label="instagram"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
