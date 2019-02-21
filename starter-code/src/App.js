import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import data from "./data.json"


class App extends Component {
  state = {
    listProducts: data
  }

  searchItem = (searchProduct, stocked) => {
    let newListProduct = [...data.data]
    newListProduct = newListProduct.filter((item)=>{
      return item.name.toLowerCase().includes(searchProduct.toLowerCase())
    })
    const newState = {
      data: newListProduct
    }
    this.setState({listProducts:newState})
  }
  render() {
    return (
      <div className="App">
        <SearchBar  searchProduct= {this.searchItem}/>
        <ProductTable products={this.state.listProducts}/>
      </div>
    );
  }
}

export default App;
