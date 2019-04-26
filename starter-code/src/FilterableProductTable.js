import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import products from './data.json';

class FilterableProductTable extends Component {
    constructor(){
        super();
        this.state = {
            searchValue : '',
            filteredProducts: []
        }
        
    }
    getSearchValue = (value) => {
       this.setState({
           searchValue: value
       })
    }

  render() {
      let productsList = products.data;
     if (this.state.searchValue) productsList = this.state.filteredProducts;
    return (
      <div className="container">
        <h1 className="title">IronStore</h1>
        <SearchBar searchValue={this.getSearchValue}/>
        <ProductTable search={this.state.searchValue} productsList={productsList}/>
      </div>
    );
  }
}

export default FilterableProductTable;
