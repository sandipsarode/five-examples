import React from "react";
import Products from "./components/Products";
import Books from "./components/Books";
import Movies from "./components/Movies";
import Students from "./components/Students";
import Gallery from "./components/Gallery";

function Sandip() {
  return (
    <>
      <h1>Product List Example</h1>
      <Products />
      <h1>Book List Example</h1>
      <Books />
      <h1>Movie List Example</h1>
      <Movies />
      <h1>Student List Example</h1>
      <Students />
      <h1>Image Gallery Example</h1>
      <Gallery />
    </>
  );
}

export default Sandip;
