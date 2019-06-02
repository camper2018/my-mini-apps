import React from "react";
import Cell from "./gridCell.jsx";

const Row = ({row, gameState}) => {
  return (
      <tr>
        {row.map((cell, i) => <Cell key={i} cellVal={cell} colIndex={i} gameState={gameState}/>)}
      </tr>
    );
};
export default Row;