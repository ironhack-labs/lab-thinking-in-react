import React, { Component } from 'react';
import SearchBar from '../SearchBar/index';
import ProductTable from '../ProductTable/';
import NavBar from '../NavBar';
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
        <NavBar/>
        <SearchBar searchQuery={this.searchHandler} />
        <ProductTable products={this.state.foundProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;