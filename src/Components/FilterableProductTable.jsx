import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    searchValue: '',
    filterStock: false,
  };

  handleSearch = (searchInput) => {
    this.setState({
      searchValue: searchInput.toLowerCase(),
    });
  };

  handleCheckBox = (isChecked) => {
    this.setState({
      filterStock: isChecked,
    });
  };

  render() {
    const filteredProducts = this.props.products
      .filter((prod) =>
        prod.name.toLowerCase().includes(this.state.searchValue)
      )
      .filter((prod) => {
        if (!this.state.filterStock) return true;
        return prod.stocked;
      });

    return (
      <React.Fragment>
        <h1>IronStore</h1>
        <SearchBar
          clbkSearch={this.handleSearch}
          clbkCheckBox={this.handleCheckBox}
        />
        <ProductTable products={filteredProducts} />
      </React.Fragment>
    );
  }
}
