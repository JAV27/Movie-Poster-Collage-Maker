import React from 'react';
import { thisExpression } from '@babel/types';

class Table extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      columns: this.props.columns,
      rows: this.props.rows,
    }
  }

  createTable = () => {
    let table = [];

    for(let i=0; i<this.state.rows; i++) {
      
      let cells = [];

      for(let j=0; j<this.state.columns; j++){
        cells.push(<div className="cell">Cell!</div>)
      }

      table.push(<div className="col">{cells}</div>)

    }

    return table;
  }

  render() {
    return (
      <div className="table">
        {this.createTable()}
      </div>
    );
  }
}

export default Table;
