import React from 'react';
import articles from "./data.json"
import './App.css';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';




function App() {
  return (
    <div className="App">
      <FilterableProductTable product = {articles.data}/>
    </div>
  );
}

export default App;
