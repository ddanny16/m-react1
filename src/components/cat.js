import React from "react";
import "../styles/_cat.scss";


const Categories = () => {
  return (
    <div className="custom_categories_container">
      <div className="custom_categories_header headerp">
        <h2 className="httag">Categories</h2>
        <a href="/src" className="view_all">View all +</a>
      </div>
      <div className="custom_categories_layout">
        <div className="custom_large_card">
          <div className="custom_category_card custom_vegetable_card">
              <span className="custom_category_badge">Fast Selling</span>
            <div className="custom_category_overlay">
              <h3 className="h3name">Fresh Vegetables</h3>
              <p className="ptag">Ranging from Efo, Ewedu, Gbure, Carrots...etc</p>
              <button className="custom_shop_button">Shop now →</button>
            </div>
          </div>
        </div>
        <div className="custom_small_cards">
          <div className="custom_category_card custom_small_card custom_grains_card">
            <div className="custom_category_overlay">
              <h3 className="h3name">Grains</h3>
              <p className="ptag">Ranging from Efo, Ewedu, Gbure, Carrots...etc</p>
              <button className="custom_shop_button">Shop now →</button>
            </div>
          </div>
          <div className="custom_category_card custom_small_card custom_fruits_card">
            <div className="custom_category_overlay">
              <h3 className="h3name">Fresh Fruits</h3>
              <p className="ptag">Ranging from Efo, Ewedu, Gbure, Carrots...etc</p>
              <button className="custom_shop_button">Shop now →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
