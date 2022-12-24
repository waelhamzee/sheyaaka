import React from "react";
import { Col, Row } from "reactstrap";

export default function ProductDescription() {
  return (
    <div className="detail-desc-container">
      <Row>
        <Col style={{padding:'0', paddingLeft:'0.7rem'}}>
          <button className="btn-primary-X">Description</button>
        </Col>
        <Col style={{padding:'0'}}>
          <button className="btn-primary-X">Highlights</button>
        </Col>
        <Col style={{padding:'0'}}>
          <button className="btn-primary-X">Material</button>
        </Col>
        <Col style={{padding:'0'}}>
          <button className="btn-primary-X clicked">Vendor</button>
        </Col>
      </Row>
        <Row>
          <div className="x9">
            <h3>Blueberry</h3>
            <div>
              <img src={require("../images/blue-berry__2_-removebg-preview.png")} alt="blue berry" />
              <button>Follow+</button>
            </div>
          </div>
        </Row>
        <Row>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim
            </p>
          </div>
      </Row>
    </div>
  );
}
