import React from "react";

const Cards = ({ movieData }) => {
  const { Poster, imdbID } = movieData;
  const buttonStyle = {
    backgroundColor: "#EA4C89",
    borderRadius: "8px",
    border: "none",
    boxSizing: "border-box",
    color: "#FFFFFF",
    cursor: "pointer",
    display: "inline-block",
    fontFamily: `"Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif`,
    fontSize: "14px",
    fontWeight: "500",
    height: "40px",
    lineHeight: "20px",
    listStyle: "none",
    margin: "0",
    outline: "none",
    padding: "10px 16px",
    position: "relative",
    textAlign: "center",
    textDecoration: "none",
    transition: "background-color 100ms",
    verticalAlign: "baseline",
    userSelect: "none",
    WebkitUserSelect: "none",
    touchAction: "manipulation",
  };
  return (
    <li style={{ listStyle: "none" }}>
      <div>
        <div>
          <img src={Poster} className="poster" alt={imdbID} />
        </div>
        <div>
          <div>
            <a href={`/movie/${imdbID}`}>
              <button className="ticket__buy-btn" style={buttonStyle}>
                Watch now
              </button>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Cards;
