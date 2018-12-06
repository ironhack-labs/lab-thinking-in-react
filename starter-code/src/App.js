import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar'
import ProductCategoryRow from './components/ProductCategoryRow'

import products from './data.json'


const groupBy = (json, key) => {
  return json.data.reduce((acc, product) => {
      (acc[product[key]] = acc[product[key]] || []).push(product);
      return acc;
  }, {});
};

class App extends Component {
  state ={
    myJson: groupBy(products, "category")
  }  
  render() {

    return (
      <div className="App">
      <SearchBar/>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductCategoryRow categories={this.state.myJson}/>
        </tbody>  
      </table>
      </div>
    );
  }
}

export default App;
