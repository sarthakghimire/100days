import React from "react";
import Card from "./Card";
import "./assets/items";

const App = () => {
  return (
    <>
      {productList.map((product, index) => (
        <Card
          key={index}
          name={product.name}
          image={product.image}
          price={product.price}
        />
      ))}
    </>
  );
};

export default App;
