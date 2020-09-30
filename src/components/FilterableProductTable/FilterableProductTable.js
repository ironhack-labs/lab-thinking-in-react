import React, { Component } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import data from '../../data.json';
import SearchBar from '../SearchBar/SearchBar';

export default class FilterableProductTable extends Component {
  state = {
    products: data.data,
    search: '',
    isFiltered: false,
  };
  searchProduct = ({ target: { value: search } }) => {
    this.setState({ search });
  };

  filterProducts = () => {
    let inStock;
    if(this.state.isFiltered){
      inStock = data.data;
  } else {
   
      inStock = this.state.products.filter(
        (product) => product.stocked === true)
  }
  this.setState({ isFiltered: !this.state.isFiltered, products: inStock });
  };

  render() {
    const filteredProducts = this.state.products.filter((product) =>
      product.name
        .toLowerCase()
        .trim()
        .includes(this.state.search.toLowerCase().trim())
    );
    return (
      <div>
        <SearchBar
          search={this.state.search}
          onChange={this.searchProduct}
          onClick={this.filterProducts}
        />
        <ProductTable
          products={this.state.products}
          filteredProducts={filteredProducts}
        />
      </div>
    );
  }
}
