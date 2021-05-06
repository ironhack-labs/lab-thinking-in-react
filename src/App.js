import React from 'react';
import logo from './logo.svg';
import jsondata from './data.json'
import './App.css';
import Ironstore from './IronstoreComponents/ironStore'
function App() {
  return (
    <div className="App">

      <Ironstore products={jsondata} />

    </div>
  );
}

export default App;
