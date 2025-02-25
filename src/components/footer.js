import React from "react";
import "../styles/_footer.scss";
import Facebook from "../assets/Social-Icon.png";
import Insta from "../assets/Social Icon (1).png";
import Twitter from "../assets/Social Icon (2).png";
import Linkedin from "../assets/Social Icon (3).png";
import Logo from "../assets/Frame 427321331.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="subtitle">LIKE WHAT YOU SEE?</p>
        <h2>Let’s work together</h2>
        <p className="description">
          If you're looking for a kick-ass product design <br /> agency, we're
          here to help!
          <br />
          <br />
          <br />
          <br />
          <hr className="hrtag" />
        </p>
      </div>
      <section className="redrum">
        {" "}
        <div className="social-icons">
          <img className="social-icon facebook" src={Facebook} alt="facebook" />
          <img className="social-icon insta" src={Insta} alt="instagram" />
          <img className="social-icon twitter" src={Twitter} alt="twitter" />
          <img className="social-icon linkedin" src={Linkedin} alt="linkedin" />
        </div>
        <p className="copyright">© 2023 Rayna. All rights reserved.</p>
        <img className="logo123" src={Logo} alt="Logo" />
      </section>
    </footer>
  );
};

export default Footer;
