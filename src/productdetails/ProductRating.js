import React from "react";
import { Col } from "reactstrap";

export default function ProductRating() {
  return (
    <>
      <Col style={{backgroundColor:'white', border: "1px solid black", padding: "1rem" }}>
        <div className="rating-container">
          <div className="ratings">
            <h1>4.30</h1>
            <p>1 Rating</p>
          </div>
          <div style={{ width: "100%" }}>
            <div className="percentage">
              <p>5</p>
              <img
                src={require("../images/Icon awesome-star (1).png")}
                alt="star"
              />
              <div></div>
              <p>0%</p>
            </div>
            <div className="percentage">
              <p>4</p>
              <img
                src={require("../images/Icon awesome-star (1).png")}
                alt="star"
              />
              <div></div>
              <p>0%</p>
            </div>
            <div className="percentage">
              <p>3</p>
              <img
                src={require("../images/Icon awesome-star (1).png")}
                alt="star"
              />
              <div></div>
              <p>0%</p>
            </div>
            <div className="percentage">
              <p>2</p>
              <img
                src={require("../images/Icon awesome-star (1).png")}
                alt="star"
              />
              <div></div>
              <p>0%</p>
            </div>
            <div className="percentage">
              <p>1</p>
              <img
                src={require("../images/Icon awesome-star (1).png")}
                alt="star"
              />
              <div></div>
              <p>0%</p>
            </div>
          </div>
        </div>
      </Col>
      <Col style={{backgroundColor:'white', border: "1px solid black", padding: "1rem" }}>
        <div className="text-container">
          <h1>Tell your opinion by assigning a rating</h1>
          <p>0/150 characters</p>
        </div>
        <div className="area-container">
          <textarea placeholder="Type Here" />
        </div>
        <div className="rating-wrapper">
          <img src={require("../images/Icon awesome-star (1).png")} alt="star" />
          <img src={require("../images/Icon awesome-star (1).png")} alt="star" />
          <img src={require("../images/Icon awesome-star (1).png")} alt="star" />
          <img src={require("../images/Icon awesome-star (1).png")} alt="star" />
          <img src={require("../images/Icon awesome-star (1).png")} alt="star" />
          <span>3/5</span>
          <button>Rate The Product</button>
        </div>
      </Col>
    </>
  );
}
