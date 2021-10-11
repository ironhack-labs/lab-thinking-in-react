import React, { Component } from 'react';
import SearchBar from '../../components/searchbar/SearchBar';
import ProductTable from '../../components/producttable/ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    filteredData: this.props.products,
    inStockChecked: false,
  };

  onSearchInputChange = (searchInput) => {
    let filteredGoods = this.props.products.filter((good) =>
      good.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (searchInput && filteredGoods.length === 0) {
      filteredGoods = [];
    }
    this.setState({
      filteredData: filteredGoods,
    });
  };

  onCheckboxInStockChangeHandler = (checkedInStock) => {
    let filteredData = [];
    if (checkedInStock) {
      filteredData = this.state.filteredData.filter((good) => {
        return good.stocked && good;
      });
    } else {
      filteredData = this.props.products;
    }

    this.setState({
      filteredData: filteredData,
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          onSearchQueryChange={this.onSearchInputChange}
          onCheckboxInStockChange={this.onCheckboxInStockChangeHandler}
        />
        <ProductTable products={this.state.filteredData} />
      </div>
    );
  }
}
