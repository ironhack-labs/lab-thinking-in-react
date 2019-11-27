import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  state = {
    currentProducts: []
  };

  componentDidMount() {
    this.setState({ currentProducts: [...this.props.products] });
  }

  handleSearch = input => {
    let inputSearch = document.getElementById('search');
    let checkbox = document.getElementById('outOfStock');
    let filtered = this.props.products
      .filter(p =>
        p.name.toLowerCase().includes(inputSearch.value.toLowerCase())
      )
      .filter(p => (checkbox.checked ? p.stocked : p));
    this.setState({ currentProducts: filtered });
  };

  render() {
    return (
      <div className="filterableProductTable">
        <h1>IronStore</h1>
        <SearchBar clbk={this.handleSearch} />
        <ProductTable products={this.state.currentProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
