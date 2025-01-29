import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Cards from "./Cards";

const Movie = () => {
  const [data, setData] = useState([]);
  const movieName = "Fast&furious";
  const API = `http://www.omdbapi.com/?s=${movieName}&apikey=b530ea32`;

  const getMovieData = async () => {
    try {
      const res = await axios.get(API);
      console.log(res.data.Search);
      setData(res.data.Search);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovieData();
  }, []);
  return (
    <>
      <h1 style={{ paddingLeft: "34px" }}>
        Featured Movies with keyword: {movieName}
      </h1>
      <ul style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {data.map((curElem) => {
          return <Cards key={curElem.imdbID} movieData={curElem} />;
        })}
      </ul>
    </>
  );
};

export default Movie;
