import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import ProductTable from './ProductTable/ProductTable';
import products from "./data.json"

export default class App extends Component {

  state = {
    products: products.data,
     newList : [],
     newProducts : [...products.data],
  }


  searchProduct(info) {
      this.state.newList = this.state.newProducts.filter(product => {
        const lc = product.name.toLowerCase();
        const filter = info.toLowerCase();
        if(lc.includes(filter)){

          return product ;
        }
      })

    this.setState({
      products: this.state.newList
    },

    )
  }

  render() {
    console.log(this.state.products)
    return (
      <div className="App">
        <SearchBar products={this.state.products}
        updateText = {(info)=> this.searchProduct(info)}
         >

         </SearchBar>
        <ProductTable products={this.state.products}></ProductTable>
      </div>
    );
  }
}
