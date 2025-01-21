// import React from "React";
import Card from "./Card";

const Banner = () => {
  return (
    <>
      <div className="container bg-dark text-white">
        <div className="row">
          <div className="col-4">
            <h1>Lorem ipsum dolor sit amet.</h1>
          </div>
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
