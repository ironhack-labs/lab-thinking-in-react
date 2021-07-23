import React from 'react';
import './App.css';
import jsondata from './data.json';
import Filterable from './components/Filterable.js';


function App() {
  return (
    <div className="App">
      <Filterable products={jsondata.data}/>
    </div>
  );
}

export default App;
