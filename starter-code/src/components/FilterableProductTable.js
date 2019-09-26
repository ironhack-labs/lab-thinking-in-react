import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
    search: ''
  };

  handleFilter = q => {
    // console.log(q);
    this.setState({
      search: q
    });
  };

  render() {
    console.log(this.state.product);
    const filteredProducts = this.state.products.filter(product => {
      return product.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    return (
      <>
        <SearchBar
          products={this.props.products}
          handleQuery={this.setQuery}
          // query={this.state.query}
          filterArray={this.handleFilter}
        />
        <ProductTable products={filteredProducts} />
      </>
    );
  }
}

export default FilterableProductTable;
