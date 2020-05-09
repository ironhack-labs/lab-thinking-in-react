import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';
// import SearchBar from './components/SearchBar';

 class App extends Component {
  
  render() {
    return (
      <div className="App">
   
         <FilterableProductTable products={data.data} />
      
      </div>
    );
  }
}

export default App;
