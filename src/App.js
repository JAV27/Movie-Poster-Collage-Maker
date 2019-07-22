import React from 'react';
import './App.css';
import Header from './components/Header';
import Settings from './components/Settings';

class App extends React.Component {

  state = {
    test: 'test'
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Settings/>
      </div>
    );
  }
}

export default App;
