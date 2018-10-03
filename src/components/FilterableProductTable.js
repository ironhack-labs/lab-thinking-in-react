import React, { Component } from 'react';

import products from '../data.json';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  constructor(){
    super();
    this.products = products.data;
    this.state ={
      products: this.products
    };
  }

  searchProduct = ({value, check}) => {
    if (check) {
      let filteredProducts = this.products.filter(e => (e.stocked === true)).filter(e => e.name.toLowerCase().includes(value.toLowerCase()));
      this.setState({products: filteredProducts})
    } else {
      let filteredProducts = this.products.filter(e => e.name.toLowerCase().includes(value.toLowerCase()));
      this.setState({products: filteredProducts})
    }   
    // this.setState({products: this.products})
    // let filteredProducts = this.products.filter(e => e.name.toLowerCase().includes(value.toLowerCase()));
    // this.setState({products: filteredProducts})
  }

  // stockedProduct = (value) => {
  //   if (!value) {
  //     let filteredProducts = this.products.filter(e => (e.stocked === true));
  //     this.setState({products: filteredProducts})
  //   } else {
  //     this.setState({products: this.products})
  //   }
  // }

  render(){
    return (
      <div className="box">
        <SearchBar sendSearch={e => this.searchProduct(e)} sendCheck={e => this.stockedProduct(e)}></SearchBar>

        <ProductTable visibleProducts={this.state.products}></ProductTable>
      </div>
    )
  }

}