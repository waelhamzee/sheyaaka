import React from "react";
import { Col, Row } from "reactstrap";
import ProductColors from "./productdetails/ProductColors";

const Product = ({ img, price, name, description, rating, colors }) => {
  return (
    <Col>
      <div className="product-image">
        <img src={img} alt="person" />
      </div>
      <h3 className="category-name">{name}</h3>
      <p className="category-desc">{description}</p>
      <Row>
        <div className="i1">
          <div>{price} USD</div>
          <div>
            <img src={require("./images/Group 257.png")} alt="person" />
            <img
              src={require("./images/Icon feather-heart (2).png")}
              alt="person"
            />
          </div>
        </div>
      </Row>
      <div className="yellow-line" style={{margin:'0.4rem auto'}}></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div className="rating-wrapper-2">
            <img
              src={require("./images/Icon awesome-star (1).png")}
              alt="star"
            />
            <img
              src={require("./images/Icon awesome-star (1).png")}
              alt="star"
            />
            <img
              src={require("./images/Icon awesome-star (1).png")}
              alt="star"
            />
            <img
              src={require("./images/Icon awesome-star (1).png")}
              alt="star"
            />
            <img
              src={require("./images/Icon awesome-star (1).png")}
              alt="star"
            />
          </div>
        </div>
        <div>
          <span className="rating-calc">
            {rating.toString().split(".")[1] ? `${rating}` : `${rating}.00`}
          </span>
        </div>
      </div>
      <div className="yellow-line" style={{margin:'0.4rem auto'}}></div>
      <Row style={{ width: "fit-content", marginTop: ".6rem" }}>
        <ProductColors colors={colors} />
      </Row>
    </Col>
  );
};

export default Product;
