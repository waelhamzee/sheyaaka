import React from "react";

export default function AddToCart() {
  return (
    <>
      <div className="quantityXCart">
        <div className="quantity-container-2">
          <span>Quantity: </span>
          <div className="quantity-number">
            <span>1</span>
          </div>
          <div className="quantity-btns">
            <button>+</button>
            <button>-</button>
          </div>
        </div>
        <div className="cart-btn-container">
          <button>Add To Cart</button>
          <img
            src={require("../images/Icon feather-heart.png")}
            alt="heart"
          />
        </div>
      </div>
      <div className="alert-container">
        <span>Order Now to get it by Thu, Feb 12</span>
        <a href="#">Change Area</a>
      </div>
      </>
  );
}
