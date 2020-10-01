import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

class FilterableProductTable extends Component {
  state = {
    products: this.props.storeData,
    searchParams: '',
  };

  handleOnChange = (searchParam) => {
    this.setState({
      searchParams: searchParam,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar onChange={this.handleOnChange} />

        <ProductTable
          storeData={this.state.products}
          searchInput={this.state.searchParams}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
