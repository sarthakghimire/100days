import React from "react";

const Card = () => {
  return (
    <>
      <div className="container d-flex flex-column">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAA1BMVEX/AAAZ4gk3AAAAPUlEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvgyZwAABCrx9CgAAAABJRU5ErkJggg=="
          className="rounded-circle"
          style={{ width: "100px" }}
        />
        <h1>Lorem ipsum dolor sit.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, quo.
        </p>
      </div>
    </>
  );
};

export default Card;
