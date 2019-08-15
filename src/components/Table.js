import React from 'react';
import Cell from './Cell';

const createTable = (cols, rows) => {
  let table = [];

  for(let i=0; i<rows; i++) {
    
    let cells = [];

    for(let j=0; j<cols; j++){
      cells.push(<Cell/>)
    }

    table.push(<div className="col">{cells}</div>)

  }

  return table;
}


function Table({rows, cols}) {

  return (
    <div className="table">
      {createTable(rows, cols)}
    </div>
  );

}

export default Table;
