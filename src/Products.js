import React from "react";
import Product from "./Product";

export default function Products({data}) {
  return (
    <>
      {data.map((suggestion, index) => {
        return <Product {...suggestion} key={index} />;
      })}
    </>
  );
}
