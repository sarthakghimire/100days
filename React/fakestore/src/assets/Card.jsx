import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className=""
        style={{
          height: 380,
          width: 300,
          border: "1px solid gray",
          borderRadius: 8,
          padding: 10,
        }}
      >
        <img
          style={{ width: "100%", objectFit: "contain", borderRadius: 4 }}
          src={props.image}
          alt="awdawda"
        />
        <h2>Title: {props.title}</h2>
        <p>{props.description}</p>

        <NavLink to={"/read-more/" + props.id}>Read More</NavLink>
      </div>
    </>
  );
};

export default Card;
