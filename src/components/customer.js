import React from "react";
import "../styles/_customer.scss";
import Cart from "../assets/Frame 1000007431.svg";
import Smiley from "../assets/Frame 1000007431 (1).svg";
import Three from "../assets/Frame 1000007431 (2).svg";
import Cloud from "../assets/Frame 1000007431 (3).svg";

const Customer = () => {
  return (
    <div>
      <main className="customer_experience">
        <join>
          {" "}
          <h2 className="text_exp">
            We provide the <br /> best customer experiences
          </h2>{" "}
          <hr />
        </join>
        <div className="whole_exp">
          <div className="product_card1">
            <img src={Cart} alt="cart" className="cart-img" />
            <h4 className="prod_fresh"> Fresh Products</h4>
            <p className="prod_fresh_text">
              We ensure money-back guarantee if the product is counterfeit
            </p>
          </div>
          <div className="product_card1">
            <img src={Smiley} alt="cart" className="cart-img" />
            <h4 className="prod_fresh">Satisfaction Guarantee</h4>
            <p className="prod_fresh_text">
              We ensure money-back guarantee if the product is counterfeit
            </p>
          </div>
          <div className="product_card1">
            <img src={Three} alt="cart" className="cart-img" />
            <h4 className="prod_fresh"> New Arrival Everyday</h4>
            <p className="prod_fresh_text">
              We ensure money-back guarantee if the product is counterfeit
            </p>
          </div>
          <div className="product_card1">
            <img src={Cloud} alt="cart" className="cart-img" />
            <h4 className="prod_fresh"> Fast & Free Shipping</h4>
            <p className="prod_fresh_text">
              We ensure money-back guarantee if the product is counterfeit
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Customer;
