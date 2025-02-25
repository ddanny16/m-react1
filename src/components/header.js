import React, { useState } from "react";
import "../styles/_header.scss";
import Logo from "../assets/Frame 427321331.svg";
import Heart from "../assets/heart.svg";
import Cart from "../assets/icon.svg";
import SearchBar from "../components/searchbar";
import HamburgerIcon from "../assets/ri_menu-4-line.svg";
import CloseIcon from "../assets/close.png";
import { Link } from "react-router-dom"; // Import Link


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <header>
        <nav className="navbar">
          <span className="logo">
            <a href="http://localhost:3000/#">
              <img src={Logo} alt="Logo" />
            </a>
          </span>

          {/* Hamburger Menu Button */}
          <button
            className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img
              src={isMobileMenuOpen ? CloseIcon : HamburgerIcon}
              alt="Menu"
              className="hamburger-icon"
            />
          </button>

          {/* Navigation Links */}
          <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
            <ul className="lists">
              <li to="/">Fruits</li>
              <li to="/">Vegetables</li>
              <li to="/">Grains</li>
            </ul>

            <ul className="searchicon">
              <li>
                <SearchBar />
              </li>
              <li className="heart">
                <img src={Heart} alt="Heart" />
              </li>
              <li className="cart">
                <img src={Cart} alt="Cart" />
              </li>
            </ul>

            <ul className="btns">
              <Link to="/login">
                <button className="loginbtn">LOGIN</button>
              </Link>
              <Link to="/signup">
                <button className="signbtn">SIGN UP</button>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
