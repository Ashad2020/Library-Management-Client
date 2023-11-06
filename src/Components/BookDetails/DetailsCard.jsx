import React from "react";

export default function DetailsCard() {
  return (
    <div className="card w-96 bg-green-100 shadow-xl mx-auto my-8">
      <figure className="px-10 pt-10">
        <img className="rounded-xl h-60 w-4/5 object-cover" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Product Name: {}</h2>
        <p>Brand Name: {}</p>
        <p>{}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
