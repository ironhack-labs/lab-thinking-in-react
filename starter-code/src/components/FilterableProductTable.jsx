import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import './FilterableProductTable.css';

class FilterableProductTable extends Component {
  state = { search: '', filtered: false };

  handleSearch = (event) => {
    if (event.target.type === 'text') {
      this.setState({ search: event.target.value });
    } else if (event.target.type === 'checkbox') {
      this.setState({ filtered: !this.state.filtered });
    }
  };

  render() {
    const filteredData = this.props.products.data.filter((product) => {
      const searchedProduct = product.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
      if (this.state.search !== '') {
        if (this.state.filtered) return searchedProduct && product.stocked;
        else {
          return searchedProduct;
        }
      } else {
        if (this.state.filtered) return searchedProduct && product.stocked;
        else return searchedProduct;
      }
    });

    return (
      <React.Fragment>
        <h1>IronStore</h1>
        <SearchBar callback={this.handleSearch} search={this.state.search} />
        <ProductTable data={filteredData} />
      </React.Fragment>
    );
  }
}

export default FilterableProductTable;
