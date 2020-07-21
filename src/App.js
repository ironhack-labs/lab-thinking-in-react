import React from 'react';
import './App.css';
import FilterTable from './components/FilterTable'
import data from './data.json'

function App() {
  return (
    <div className="App">
        
        <FilterTable products={ data } />
    </div>
  );
}

export default App;
