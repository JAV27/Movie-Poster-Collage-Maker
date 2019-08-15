import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Settings from './components/Settings';
import Table from './components/Table';
import useSlider from './hooks/useSlider';
const APIKey = "ed07fde2a29e865fa73860b991476f93";

function App() {

  const {rows, cols, onSliderChange} = useSlider();

  return (
      <div className="App">
        <Header/>
        <Settings rows={rows} cols={cols} onSliderChange={onSliderChange}/>
        <Table rows={rows} cols={cols}/>
      </div>
  )
  
}

export default App;
