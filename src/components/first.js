import React, { useState } from "react";
import "../styles/_first.scss";
import Phone from "../assets/Icon-left.svg";
import Arrow from "../assets/button-icon.svg";
import Flag from "../assets/twemoji_flag-nigeria.svg";

const First = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);

  return (
    <main className="firstmain">
      <div className="firstwhole">
    
        <div className="firstleft">
          <img className="phone" src={Phone} alt="phone" />
          <number>+234 7065292789</number>
        </div>

       
        <div className="firstmiddle">
          <span className="middle">Get 50% Off on Selected Items</span>
          <span href="/" className="middle2">
            <b>|</b> Shop Now
          </span>
        </div>

     
        <div className="firstright">
       
          <div className="dropdown">
            <span
              className="language"
              onClick={() => setLanguageOpen(!languageOpen)}
            >
              EN{" "}
              <img
                className={`arrow ${languageOpen ? "rotate" : ""}`}
                src={Arrow}
                alt="arrow"
              />
            </span>
            {languageOpen && (
              <ul className="dropdown-menu language-menu">
                <li>English</li>
                <li>French</li>
                <li>Spanish</li>
              </ul>
            )}
          </div>

       
          <div className="dropdown">
            <span
              className="country"
              onClick={() => setCountryOpen(!countryOpen)}
            >
              <img className="flag" src={Flag} alt="flag" /> NIGERIA
              <img
                className={`arrow ${countryOpen ? "rotate" : ""}`}
                src={Arrow}
                alt="arrow"
              />
            </span>
            {countryOpen && (
              <ul className="dropdown-menu country-menu">
                <li>🇳🇬 Nigeria</li>
                <li>🇺🇸 USA</li>
                <li>🇬🇧 UK</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default First;
