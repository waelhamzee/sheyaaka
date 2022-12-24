import React from "react";

export default function AddToCartMobile() {
  return (
    <div className="add-to-cart-container">
      <div className="add-to-cart-info">
        <p>Order Now to get it by</p>
        <p>Thu, Feb 12</p>
      </div>
      <div className="green-line"></div>
      <div
        className="grid-x9"
      >
        <div className="quantity-container">
          <p>Quantity: </p>
          <button>+</button>
          <div>
            <span>1</span>
          </div>
          <button>-</button>
        </div>
        <div className="add-to-cart-btn">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
