import React from "react";
import LeftArrow from "../assets/chevron-right.svg";

import "../styles/_category.scss";

import vegetableImg from "../assets/Frame 1000007411.svg";
import grainsImg from "../assets/Frame 1000007412.svg";
import fruitsImg from "../assets/Frame 1000007414.svg";

const CategoryCard = ({ title, description, image, tag, size }) => {
  return (
    <div className={`category-card ${size}`}>
      <img src={image} alt={title} className="background-img" />
      <div className="overlay black">
        <sells> {tag && <span className="tag">{tag}</span>}</sells>
        <h3 className="titty">{title}</h3>
        <p>{description}</p>
        <div className="herotext3 high">
          <shop className="sprite">
            Shop Now <img className="left-arrow" src={LeftArrow} alt="arrow" />
          </shop>
        </div>
      </div>
    </div>
  );
};

const CategoriesSection = () => {
  return (
    <div className="categories-container">
      <div className="headerp">
        <h2>Categories</h2>
        <a href="/src" className="view-all">
          View all →
        </a>
      </div>
      <div className="category-grid">
        {/* First Large Card */}
        <div className="left">
          <CategoryCard
            title="Fresh Vegetables"
            description="Ranging from Efo, Ewedu, Gbure, Carrots... e.t.c"
            image={vegetableImg}
            tag="Fast Selling"
            size="large"
          />
        </div>
        {/* Two Small Cards */}
        <div className="right">
          <CategoryCard
            title="Grains"
            description="Ranging from rice, beans, maize, millet..."
            image={grainsImg}
            size="small"
          />
          <CategoryCard
            title="Fresh Fruits"
            description="Ranging from apples, oranges, bananas, pineapples..."
            image={fruitsImg}
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
