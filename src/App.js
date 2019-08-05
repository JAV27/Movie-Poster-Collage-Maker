import React from 'react';
import './App.css';
import Header from './components/Header';
import Settings from './components/Settings';
import Table from './components/Table';

class App extends React.Component {

  state = {
    test: 'test'
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Settings/>
        <Table columns="5" rows="5"/>
      </div>
    );
  }
}

export default App;
