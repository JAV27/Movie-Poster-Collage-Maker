import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Settings from './components/Settings';
import Table from './components/Table';

function App() {

  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(5);

  function onSliderChange(e) {
    if(e.target.name === "rows") {
      setRows(e.target.value);
    } else if(e.target.name === "cols") {
      setCols(e.target.value);
    }
  }

  return (
      <div className="App">
        <Header/>
        <Settings rows={rows} cols={cols} onSliderChange={onSliderChange}/>
        <Table rows={rows} cols={cols}/>
      </div>
  )
  
}

export default App;
