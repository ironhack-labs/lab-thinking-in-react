import React, { Component } from 'react';
import SearchBar from '../SearchBar/index';
import ProductTable from '../ProductTable/';

class FilterableProductTable extends Component {
  
    state = {
    products: [...this.props.products.data],
    foundProducts: [...this.props.products.data],
  };

  searchHandler = (query) => {
    console.log(query);
    const foundProducts = this.state.products.filter((product) =>
      product.name.toUpperCase().includes(query.toUpperCase())
    );
    this.setState({ foundProducts: foundProducts });
  };

  render() {
    return (
      <div>
        <h1 className="h1 p-2">IronStore</h1>
        <SearchBar searchQuery={this.searchHandler} />
        <ProductTable products={this.state.foundProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
