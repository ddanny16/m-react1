import React from "react";
import "../styles/_hero.scss";
import LeftArrow from "../assets/chevron-right.svg";

const Hero = () => {
  return (
    <div>
      <main className="heromain fade-in">
        <section className="heroimgtext">
          <span className="herotext"> ENDLESS SUMMER SALE</span>
          <div className="herotext2">
            Up to <span className="bold">20% off</span> on all items till
            <span className="bold"> September 11</span>
          </div>
          <div className="herotext3">
            <shop >
              Shop Now{" "}
              <img className="left-arrow" src={LeftArrow} alt="arrow" />
            </shop>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
