import React from "react";
import "../styles/_collection.scss";
import Rightup from "../assets/arrow-up-right.png";
import LeftArrow from "../assets/chevron-right.svg";

const Collection = () => {
  return (
    <div>
      <main className="collection_whole">
        <section className="card_whole_collection">
          <div className="collection_card_left">
            <div className="collection_card1">
              <div className="bread1">
                <span className="discount">UP TO 80% OFF</span>
                <img src={Rightup} alt="arrow-up" className="side-arrow" />
              </div>
              <div className="bread2">
                <h5 className="styled_text">Shops from popular Collection</h5>
                <shop>
                  Shop Now{" "}
                  <img className="left-arrow" src={LeftArrow} alt="arrow" />
                </shop>
              </div>
            </div>
          </div>

          <div className="collection_card_right">
            <div className="collection_card2">
              <span className="yellow-text">UP TO 20% OFF</span>
              <h4 className="freshy">Fresh Tomatoes from the farm</h4>
            </div>
            <div className="collection_card3">
              {" "}
              <span className="yellow-text">UP TO 20% OFF</span>
              <h4 className="freshy">Fresh Tomatoes from the farm</h4>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Collection;
