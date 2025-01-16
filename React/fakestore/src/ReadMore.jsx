import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "./assets/variables";

const ReadMore = () => {
  const params = useParams();

  const singleData = blogData.find((item) => item.id == params.id);
  return (
    <>
      <h1>This is Single Page</h1>
      <img
        style={{
          width: "100%",
          height: 400,
          objectFit: "contain",
          borderRadius: 4,
        }}
        src={singleData.image}
        alt="awdawda"
      />
      <h2>Title: {singleData.title}</h2>
      <p>{singleData.description}</p>
    </>
  );
};

export default ReadMore;
