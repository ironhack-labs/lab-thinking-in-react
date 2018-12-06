import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import productsData from './data.json';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable'

// {"category": "Sporting Goods",  "price": "$49.99",    "stocked": true,    "name": "Football"}
 const products = {};
 productsData.data.forEach(product => {
    if(products[product.category]){
        products[product.category].push(product);
    }else{
        products[product.category] =[product]
    }
 });
// console.log(products);

export default class App extends Component {
constructor(){
super();
this.state = {
    products
}

}

  render() {
    return (
      <div className="App">
        <FilterableProductTable products = {this.state.products}/>
      </div>
    );
  }
}
