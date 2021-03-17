import React, { Component } from 'react';
import jsondata from './data.json'
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './Components/FilterableProductTable';

class App extends Component {
  return (){
    <div className="App">
      <FilterableProductTable products={ jsondata.data } />
    </div>
  };
}

export default App;
