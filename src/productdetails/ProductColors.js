import React from "react";

export default function ProductColors({ colors, showPar }) {
  return (
    <div className="detail-colors-container">
      {showPar && <p>Color: </p>}
      {colors.map((color, index) => {
        return (
          <div key={index}>
            <button style={{ backgroundColor: color }}></button>{" "}
          </div>
        );
      })}
    </div>
  );
}
