import React from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import products from './data/data.json'
import ProductTable from './components/product/ProductTable';
import { Component } from 'react';


class App extends Component {

 state = {
   products : []
 }

 componentDidMount(){
   this.setState(({products}))
 }

  render(){
 
  return (
    <div className="container m-5">
      <h1>IronProducts</h1>
    
     <FilterableProductTable products= { products.data } />     
    </div>
  );
}}

export default App;
