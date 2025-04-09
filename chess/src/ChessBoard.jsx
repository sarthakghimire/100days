import React, { useState } from "react";
import Box from "./Box";

const ChessBoard = () => {
  const [rookPosition, setRookPosition] = useState({ row: 0, col: 0 });

  const isLegal = (row, col) => {
    return row === rookPosition.row || col === rookPosition.col;
  };

  const checkLegal = (row, col) => {
    if (isLegal(row, col)) {
      setRookPosition({ row, col });
    } else {
      console.log("Illegal move!");
    }
  };

  const rows = Array.from({ length: 8 });
  const cols = Array.from({ length: 8 });

  return (
    <div>
      {rows.map((_, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {cols.map((_, colIndex) => {
            const isDark = (rowIndex + colIndex) % 2 === 1;
            const hasRook =
              rowIndex === rookPosition.row && colIndex === rookPosition.col;

            return (
              <Box
                key={`${rowIndex}-${colIndex}`}
                isDark={isDark}
                onClick={() => checkLegal(rowIndex, colIndex)}
              >
                {hasRook && "♖"}
              </Box>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ChessBoard;
