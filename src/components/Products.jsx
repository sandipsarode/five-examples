// Example 1: Product List
import React from "react";

const products = [
  { id: 1, name: "Laptop", price: "$999", available: "In Stock" },
  { id: 2, name: "Smartphone", price: "$699", available: "Out of Stock" },
  { id: 3, name: "Headphones", price: "$199", available: "In Stock" },
];

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
