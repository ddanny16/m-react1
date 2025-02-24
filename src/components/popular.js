import React from "react";
import "../styles/_popular.scss";
import starImage from "../assets/Icon-left.png";

// Importing product images normally
import product1 from "../assets/Frame 1000007293.svg";
import product2 from "../assets/Frame 1171274871.svg";
import product3 from "../assets/Frame 1000007301.png";
import product4 from "../assets/Frame 1000007301.svg";

const PopularProducts = () => {
  return (
    <div className="popular_container">
      <div className="popular_header">
        <h2>Popular</h2>
        <button className="view_more">View more ▼</button>
      </div>

      <div className="products_grid">
        {/* Product 1 */}
        <div className="product_card">
          <img src={product1} alt="Court Heels" className="product_image" />
          <cells>
            <h3 className="product_name">Court Heels</h3>
            <span className="product_price">$95.00</span>
          </cells>
          <p className="product_category">Red Stilettos</p>
          <div className="product_rating">
            {Array(5)
              .fill()
              .map((_, index) => (
                <img
                  key={index}
                  src={starImage}
                  alt="Star"
                  className="star_icon"
                />
              ))}
            <span>(91)</span>
          </div>
          <button className="add_to_cart">🛒 Add to Cart</button>
        </div>

        {/* Product 2 */}
        <div className="product_card">
          <img src={product2} alt="Court Heels" className="product_image" />
          <cells>
            {" "}
            <h3 className="product_name">Court Heels</h3>
            <span className="product_price">$95.00</span>
          </cells>
          <p className="product_category">Red Stilettos</p>
          <div className="product_rating">
            {Array(5)
              .fill()
              .map((_, index) => (
                <img
                  key={index}
                  src={starImage}
                  alt="Star"
                  className="star_icon"
                />
              ))}
            <span>(91)</span>
          </div>
          <button className="add_to_cart">🛒 Add to Cart</button>
        </div>

        {/* Product 3 */}
        <div className="product_card">
          <img src={product3} alt="Court Heels" className="product_image" />
          <cells>
            {" "}
            <h3 className="product_name">Court Heels</h3>
            <span className="product_price">$95.00</span>
          </cells>
          <p className="product_category">Red Stilettos</p>
          <div className="product_rating">
            {Array(5)
              .fill()
              .map((_, index) => (
                <img
                  key={index}
                  src={starImage}
                  alt="Star"
                  className="star_icon"
                />
              ))}
            <span>(91)</span>
          </div>
          <button className="add_to_cart">🛒 Add to Cart</button>
        </div>

        {/* Product 4 */}
        <div className="product_card">
          <img src={product4} alt="Court Heels" className="product_image" />
          <cells>
            {" "}
            <h3 className="product_name">Court Heels</h3>
            <span className="product_price">$95.00</span>
          </cells>
          <p className="product_category">Red Stilettos</p>
          <div className="product_rating">
            {Array(5)
              .fill()
              .map((_, index) => (
                <img
                  key={index}
                  src={starImage}
                  alt="Star"
                  className="star_icon"
                />
              ))}
            <span>(91)</span>
          </div>
          <button className="add_to_cart">🛒 Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
