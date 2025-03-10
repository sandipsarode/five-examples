import React from "react";
import Products from "./components/Products";
import Books from "./components/Books";
import Movies from "./components/Movies";
import Students from "./components/Students";
import Gallery from "./components/Gallery";

function Sandip() {
  return (
    <>
      <div className="flex justify-center flex-wrap gap-20 font-[Poppins] mt-4">
        <div className="bg-orange-500 p-5">
          <h1 className="text-2xl font-bold">Product List Example</h1>
          <Products />
        </div>
        <div className="bg-orange-500 p-5">
          <h1 className="text-2xl font-bold">Book List Example</h1>
          <Books />{" "}
        </div>
        <div className="bg-orange-500 p-5">
          <h1 className="text-2xl font-bold">Movie List Example</h1>
          <Movies />
        </div>
        <div className="bg-orange-500 p-5">
          <h1 className="text-2xl font-bold">Student List Example</h1>
          <Students />
        </div>
        <div className="bg-orange-500 p-5">
          <h1 className="text-2xl font-bold">Image Gallery Example</h1>
          <div className="flex gap-20">
            <Gallery />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sandip;
