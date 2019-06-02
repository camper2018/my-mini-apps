import React from "react";

const Cell = ({ cellVal, colIndex, gameState }) => {
  let color;
  if (cellVal === null) {
    color = "white";
  } else {
    color = cellVal;
  }

    return (
      <td>
        <div className="cell" onClick={() => gameState(colIndex)}>
          <div className={color}></div>
        </div>
      </td>
    );
}


export default Cell;