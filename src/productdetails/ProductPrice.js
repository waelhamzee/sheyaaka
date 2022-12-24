import React from "react";

export default function ProductPrice() {
  return (
    <div className="detail-price-container">
      <div className="price">
        <p>250 USD</p>
        <p>190 USD</p>
        <p>VAT Included</p>
      </div>
      <p className="off">22% off</p>
      <div className="reviews">
        <span>You Saved: 80 USD</span>
        <div>
          <div style={{ display: "flex", gap: ".3rem", alignItems:'center' }}>
            <img src={require("../images/Icon awesome-star (1).png")} alt="star" />
            <img src={require("../images/Icon awesome-star (1).png")} alt="star" />
            <img src={require("../images/Icon awesome-star (1).png")} alt="star" />
            <img src={require("../images/Icon awesome-star (1).png")} alt="star" />
            <img src={require("../images/Icon awesome-star (1).png")} alt="star" />
          </div>
          <p>1 Reviews</p>
        </div>
      </div>
    </div>
  );
}
