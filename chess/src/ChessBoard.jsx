import Box from "./Box";
import React from "react";

const ChessBoard = () => {
  const rows = Array.from({ length: 8 });
  const cols = Array.from({ length: 8 });

  return (
    <div>
      {rows.map((_, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {cols.map((_, colIndex) => {
            const isDark = (rowIndex + colIndex) % 2 === 1;
            return <Box key={`${rowIndex}-${colIndex}`} isDark={isDark} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default ChessBoard;
