import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './FilterableProductTable/FilterableProductTable';
import data from "./data.json"



export default class App extends Component {
constructor(){
  super();
  this.state = {
    data: {
      category: "",
      price: 0,
      stocked: "",
      name: ""
    }
  };
}

 
  
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={ data }></FilterableProductTable>
      </div>
    );
  }
}
