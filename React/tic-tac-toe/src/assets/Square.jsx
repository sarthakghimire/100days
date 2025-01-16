import { useState } from "react";

// function Square() {
//   const [value, setValue] = useState(null);

//   function handleClick() {
//     setValue("X");
//   }

//   return (
//     <button className="square" onClick={handleClick}>
//       {value}
//     </button>
//   );
// }

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
