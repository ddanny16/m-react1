import React from "react";
import "../styles/_brands.scss";
import Nike from "../assets/Rectangle 512.svg";
import Face from "../assets/Rectangle 517.png";
import Addidas from "../assets/Rectangle 514.svg";
import Zara from "../assets/Rectangle 516.svg";

const Brands = () => {
  return (
    <div>
      <section className="brand fade-in">
        <brandtext>Brands</brandtext>
      </section>
      <section className="brandings fade-slide-up">
        <img className="nike" src={Nike} alt="nikelogo" />
        {""}
        <img className="face" src={Face} alt="faceelogo" />
        {""}
        <img className="addidas" src={Addidas} alt="addidaslogo" />
        {""}
        <img className="zara" src={Zara} alt="zaralogo" />
        {""} <img className="nike" src={Nike} alt="nikelogo" />
        {""}
        <img className="face" src={Face} alt="faceelogo" />
        {""}
        <img className="addidas" src={Addidas} alt="addidaslogo" />
        {""}
      </section>
    </div>
  );
};

export default Brands;
