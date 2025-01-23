import React from "react";
import "./assets/Card.css";
import "./assets/items";

const Card = (name, image, price) => {
  return (
    <>
      <div className="container">
        <div className="productName">
          <h1>{name}</h1>
        </div>
        <div className="productImage">
          <img src={image} alt="" />
        </div>
        <div className="productPrice">
          <p>{price}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
