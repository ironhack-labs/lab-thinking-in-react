import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import ProductTable from '../ProductTable';

class FilterProductTable extends Component {
  state = {
    products: [...this.props.products.data],
    foundProducts: [...this.props.products.data],
  };

  searchHandler = (query) => {
    const foundProducts = this.state.products.filter((product) =>
      product.name.toUpperCase().includes(query.toUpperCase())
    );
    this.setState({ foundProducts: foundProducts });
  };
  render() {
    return (
      <div>
        <h1 className="mainTitle p-2"> IronStore</h1>
        <SearchBar searchQuery={this.searchHandler} />
        <ProductTable products={this.state.foundProducts} />
      </div>
    );
  }
}

export default FilterProductTable;
