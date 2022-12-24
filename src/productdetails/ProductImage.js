import React from "react";

export default function ProductImage({ matches }) {
  return (
    <>
      <div className="detail-image-container">
        <img
          src={require("../images/kristina-petrick-liJ5irOt8BM-unsplash (4).jpg")}
          alt="kristian"
        />
        {!matches && (
          <>
            <div className="low-on-stock">
              <span>Low on Stock</span>
            </div>
            <div className="white-heart">
              <img
                src={require("../images/Icon feather-heart (3).png")}
                alt="white heart"
              />
            </div>
            <div className="swipe">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </>
        )}
      </div>
      {matches && (
        <div className="sketches">
          <div className="logo-holder">
            <img
              src={require("../images/kristina-petrick-liJ5irOt8BM-unsplash (4).jpg")}
              alt="kristian"
            />
          </div>
          <div className="logo-holder">
            <img
              src={require("../images/kristina-petrick-liJ5irOt8BM-unsplash (4).jpg")}
              alt="kristian"
            />
          </div>
          <div className="logo-holder">
            <img
              src={require("../images/kristina-petrick-liJ5irOt8BM-unsplash (4).jpg")}
              alt="kristian"
            />
          </div>
          <div className="logo-holder">
            <img
              src={require("../images/kristina-petrick-liJ5irOt8BM-unsplash (4).jpg")}
              alt="kristian"
            />
          </div>
        </div>
      )}
    </>
  );
}
