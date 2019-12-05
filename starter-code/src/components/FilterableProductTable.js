import React, { Component } from 'react';
import data from '../data.json';
import SearchBar from './searchBar';
import ProductTable from './ProductTable';

class FilterTable extends Component {
  constructor() {
    super();
    this.state = {
      data: data.data,
      backup: data.data
    };
  }

  searchProduct = (aux, stock) => {
      let productCopy = [...this.state.backup];
      productCopy = productCopy.filter(elm => elm.name.includes(aux));
      if(stock)
      (productCopy = productCopy.filter(elm => elm.stocked === (stock)))
      this.setState({ data: productCopy });
  };

  render() {
    return (
      <>
        <SearchBar searchItem={this.searchProduct} />
        <ProductTable products={this.state.data} />
      </>
    );
  }
}

export default FilterTable;