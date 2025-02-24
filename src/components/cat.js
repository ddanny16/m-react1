import React from "react";
import "../styles/_cat.scss"
const Categories = () => {
  return (
    <div className="categories-container1">
      <div className="categories-header1">
        <h2>Categories</h2>
        <a href="/src">View all +</a>
      </div>
      <div className="categories-layout1">
        <div className="large-card1">
          <div className="category-card1">
            <img src="../assets/Frame 1000007414.svg" alt="Fresh Vegetables" className="category-image1" />
            <div className="category-overlay1">
              <span className="category-badge1">Fast Selling</span>
              <h3>Fresh Vegetables</h3>
              <p>Ranging from Efo, Ewedu, Gbure, Carrots...etc</p>
              <button className="shop-button1">Shop now →</button>
            </div>
          </div>
        </div>
        <div className="small-cards1">
          <div className="category-card1 small-card1">
            <img src="https://via.placeholder.com/300" alt="Grains" className="category-image1" />
            <div className="category-overlay1">
              <h3>Grains</h3>
              <p>Ranging from Efo, Ewedu, Gbure, Carrots...etc</p>
              <button className="shop-button1">Shop now →</button>
            </div>
          </div>
          <div className="category-card1 small-card1">
            <img src="https://via.placeholder.com/300" alt="Fresh Fruits" className="category-image1" />
            <div className="category-overlay1">
              <h3>Fresh Fruits</h3>
              <p>Ranging from Efo, Ewedu, Gbure, Carrots...etc</p>
              <button className="shop-button1">Shop now →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
