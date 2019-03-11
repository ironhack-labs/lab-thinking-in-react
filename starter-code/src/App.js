import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IronStore from './components/IronStore'
import Search from './components/Search'
import Products from './services/data.json'


class App extends Component {

  state = {
    allProducts : Products.data,
    products: Products.data,
    filterStock: false
  }

  onStock = (bool) =>{
   this.setState({
    filterStock : bool
   })
  }

  filterName = (word) => {
   
    
    const newProducts = Products.data.filter(product => product.name.toLowerCase().includes(word.toLowerCase()))
    this.setState({
      products: newProducts
    })
  }
  
  render() {
    console.log(this.state.products)
    return (
      <div className="App mt-5">
        <h1>IronStore</h1>
        <Search onStock={this.onStock} filterName={this.filterName}></Search> 
        <IronStore stock={this.state.filterStock}items={this.state.products}></IronStore>
      </div>
    );
  }
}

export default App;
