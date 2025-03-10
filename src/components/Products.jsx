import React from "react";
import { products } from "../data/productsData";

function Products() {
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h2>Product: {product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Status: {product.available}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Products;
