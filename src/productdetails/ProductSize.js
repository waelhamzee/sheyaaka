import React from "react";

const flex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: ".2rem",
};

const line = {
  height: "8px",
  width: "1px",
  backgroundColor: "#c3a14d",
};

export default function ProductSize() {
  return (
    <div className="detail-size-container">
      <div className="size-info-container">
        <p>Size: </p>
        <div className="size-info">
          <div style={flex}>
            <p>
              Find Your Fit <span style={{ color: "#c3a14d" }}>?</span>
            </p>
          </div>
          <div style={line}></div>
          <div style={flex}>
            <p>Show Size Chart</p>
            <img src={require("../images/Icon awesome-ruler.png")} alt="ruler" />
          </div>
        </div>
      </div>
      <div className="detail-size-btn-container">
        <button>S</button>
        <button className="btn-chosen">M</button>
        <button>L</button>
        <button>XL</button>
      </div>
    </div>
  );
}
