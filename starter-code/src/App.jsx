import React, { Component } from 'react';
import FilterableProductTable from './components/FilterableProductTable.js'
import data from './data.json'
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products:data.data,
      filteredProducts:data.data,
    }
  }

sortCategory=()=>{
  let copy = [...this.state.filteredProducts];
  copy.sort((a,b)=>{
    return a.category-b.category;
  })

  this.setState({
    filteredProducts:copy,
  })
}

filter=(search,stock)=>{
  let copy = [...this.state.products];
  let filtered;
  if(stock){
    filtered = copy.filter(product=>{
      return (product.name.toUpperCase().includes(search.toUpperCase()) && product.stocked)
    })
  }else{
    filtered = copy.filter(product=>{
      return (product.name.toUpperCase().includes(search.toUpperCase()))
    })
  }
  
  this.setState({
    filteredProducts: filtered,
  })
}
  render() {
    return (
      <div className="App">
        <FilterableProductTable filter={this.filter} products={this.state.filteredProducts} />
      </div>
    );
  }
}
