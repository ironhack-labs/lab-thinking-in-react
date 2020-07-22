import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
// import data from './../data.json'

export class FilterableProductTable extends Component {
  state = {
    searchValue: '',
    isChecked: false,
  };

  handleSearch = (event) => {
    // console.log("I am being triggered");
    this.setState({ searchValue: event.target.value });
    console.log(this.state.searchValue);
    //
  };

  checkStock = (event) => {
    const checked = event.target.checked;
    this.setState({ isChecked: checked });
  };

  render() {
    const filteredProd = this.props.products.filter((product) => {
      /* 1- search bar vide + checkbox false
        2 - search bar contient du texte + checkbox false  
        3- searchbar contient du texte + checkbox true
        4 - search est vide + checkbox true
        */
      
      if (!this.state.searchValue && !this.state.isChecked) {
        return product;
      } else if (this.state.searchValue && !this.state.isChecked) {
        return product.name.includes(this.state.searchValue);
      }else if(this.state.searchValue&&this.state.isChecked){
          return product.name.includes(this.state.searchValue)&&product.stocked===true
      }else{     
          return product.stocked===true
      }
    });

    return (
      <div className="total-container">
      <h1>IronStore</h1>
        <SearchBar callback={this.handleSearch} checkbox={this.checkStock} />
        <ProductTable products={filteredProd} />
        {/* this.props.produtcs correspond au data.data envoyé depuis App.js */}
      </div>
    );
  }
}

export default FilterableProductTable;
