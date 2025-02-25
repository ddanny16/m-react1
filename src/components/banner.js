import React from "react";
import "../styles/_banner.scss";
import Vegetable from "../assets/image 1099.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h2>
          Free delivery on  all Lagos Orders
        </h2>
        <button>Shop now →</button>
      </div>
      <div className="banner-image">
        <img src={Vegetable} alt="Vegetables" />
      </div>
    </div>
  );
};

export default Banner;
