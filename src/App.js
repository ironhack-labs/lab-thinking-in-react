import React, { Component } from 'react';
import data from './data.json';
import './App.css';
import SearchBar from './components/SearchBar.js';
import FilterableProductTable from './components/FilterableProductTable.js';
import { v4 as uuid } from 'uuid';


console.log(data.data)
const products = data.data.map(product =>({...product, id: uuid()}))

console.log(`this the dataID ${products}`)

export default class App extends Component {
 

 
  //state = {
   // data: data.data,
  //};
  //console.log(`this the data ${data}`)
  
  
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={products} />
      </div>
    );
  }
}
