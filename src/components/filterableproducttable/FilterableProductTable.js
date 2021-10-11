import React, { Component } from 'react';
import SearchBar from '../../components/searchbar/SearchBar';
import ProductTable from '../../components/producttable/ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
    filteredData: [],
  };

  onSearchInputChange = (filteredGoods) => {
    this.setState({
      filteredData: filteredGoods,
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          onSearchQueryChange={this.onSearchInputChange}
          data={this.state.products}
          filteredData={this.state.filteredData}
        />
        <ProductTable
          products={
            this.state.filteredData.length > 0
              ? this.state.filteredData
              : this.state.products
          }
        />
      </div>
    );
  }
}
