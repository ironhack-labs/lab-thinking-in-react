import React, { Component } from 'react';
import data from './data.json';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable.js';
import { v4 as uuid } from 'uuid';


const products = data.data.map((product) => ({...product, id: uuid()}));
 //console.log(products);
//console.log(`this the dataID ${products}`);

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={products} />
      </div>
    );
  }
}


