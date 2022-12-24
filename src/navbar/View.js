import React from "react";

export default function View() {
  return (
    <div className="view-container">
      <div className="logoXsearch">
        <div className="logo">
          <img src={require("../images/Group 2.png")} alt="logo" />
        </div>
        <div className="search">
          <img
            src={require("../images/Icon feather-search (1).png")}
            alt="search"
          />
        </div>
      </div>
      <div className="view-static">
        <img
          src={require("../images/Icon ionic-ios-arrow-back.png")}
          alt="arrow"
        />
        <div className="line"></div>
        <p>View Product</p>
        <div className="line"></div>
      </div>
    </div>
  );
}
