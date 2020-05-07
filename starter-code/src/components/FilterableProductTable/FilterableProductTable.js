import React, { Component } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';
import data from '../../data.json'

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.products = [...data.data];

    this.state = {
      products: [...this.products],
      filteredProducts: [...this.products]
    };
  }
  searchSpace = (e) => {
    let productsCopy = [...this.state.products]

    let filteredProducts = productsCopy.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
  
    );
console.log(filteredProducts)
    this.setState({
      ...this.state,
      filteredProducts: filteredProducts,
    })
  }

  
  render() {
    return (
      <>
        <SearchBar
          products={this.state.products}
          searchSpace={this.searchSpace}
        />
        <ProductTable filteredProducts={this.state.filteredProducts} />
      </>
    );
  }
}
