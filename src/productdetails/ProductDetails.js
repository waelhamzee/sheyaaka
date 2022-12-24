import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "reactstrap";
import ProductImage from "./ProductImage";
import ProductTitle from "./ProductTitle";
import ProductPrice from "./ProductPrice";
import ProductColors from "./ProductColors";
import ProductSize from "./ProductSize";
import ProductDescription from "./ProductDescription";
import ProductRating from "./ProductRating";
import Products from "../Products";
import AddToCartMobile from "../cart/AddToCartMobile";
import AddToCart from "../cart/AddToCart";
import SubNavbar from "../navbar/SubNavbar";
import Navbar from "../navbar/Navbar";
import Bar from "../navbar/Bar";
import View from "../navbar/View";
import { suggestions, collection } from "../data/suggestions";

const singleProductDetail = {
  name: "Blueberry",
  description: ["Dress Jumpsuit", "Dress Jumpsuit in Organic Cotton"],
  price: 250,
  new_price: 190,
  sale_percentage: 22,
  vat: true,
  reviews: 1,
  rating: 4.3,
  img: require("../images/kristina-petrick-liJ5irOt8BM-unsplash (3).png"),
  colors: ["#959db6", "#95b6b0", "#c6c6c6", "#fffff"],
};

export default function ProductDetails() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 750px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 750px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <Card style={{ border: "none" }}>
      {matches ? (
        <>
          <Navbar />
          <SubNavbar />
        </>
      ) : (
        <View />
      )}
      <Row style={matches ? { padding: "2rem" } : undefined}>
        <Col xs={matches ? "5" : undefined}>
          <ProductImage matches={matches} />
        </Col>
        <Col
          xs={matches ? "7" : undefined}
          style={
            matches
              ? undefined
              : { padding: "2rem", backgroundColor: "#f8f4ea" }
          }
        >
          <Row>
            <ProductTitle />
          </Row>
          <Row>
            <ProductPrice />
          </Row>
          <div className="yellow-line"></div>
          <Row>
            <ProductColors colors={singleProductDetail.colors} showPar={true} />
          </Row>
          <div className="yellow-line"></div>
          <Row>
            <ProductSize />
          </Row>
          <div className="yellow-line"></div>
          {matches && (
            <>
              <Row>
                <AddToCart />
              </Row>
              <div className="yellow-line"></div>
              <Row>
                <img
                  src={require("../images/Image 1.png")}
                  alt="ad"
                  style={{ margin: "1rem 0" }}
                />
              </Row>
              <div className="yellow-line"></div>
            </>
          )}
        </Col>
      </Row>
      {matches && (
        <>
          <Row style={{ padding: "2rem" }}>
            <ProductDescription />
          </Row>
          <div className="yellow-line"></div>
        </>
      )}
      <Row
        style={
          matches
            ? { gap: "1rem", padding: "2rem" }
            : { gap: "1rem", backgroundColor: "#f8f4ea", padding: "2rem" }
        }
        className="split"
      >
        <ProductRating />
      </Row>
      <div className="you-may-also-like">
        <span>You May Also Like</span>
      </div>
      <Row className="remove-wrap-1">
        <Products data={suggestions} />
      </Row>
      <div className="you-may-also-like">
        <span>Complete The Look</span>
      </div>
      <Row className="remove-wrap">
        <Products data={collection} />
      </Row>
      {!matches && (
        <>
          <Bar />
          <AddToCartMobile />
        </>
      )}
    </Card>
  );
}
