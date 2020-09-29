import React, { Component } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import data from '../../data.json';
import SearchBar from '../SearchBar/SearchBar';

export default class FilterableProductTable extends Component {
  state = {
    products: data.data,
    search: '',
  };
  searchProduct = ({ target: { value: search } }) => {
    this.setState({ search });
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
        <SearchBar search={this.state.search} onChange={this.searchProduct} />
        <ProductTable products={this.state.products} filteredProducts={filteredProducts}/>
      </div>
    );
  }
}
