import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import data from '../data.json';
import CheckBox from './CheckBox';

class FilterableProductTable extends Component {
  state = {
    products: data.data,
    availableProducts: [],
    currentSearchTerm: '',
    boxChecked: false
  };

  changeHandler = searchTerm => {
    this.setState({
      currentSearchTerm: searchTerm
    });
    this.returnAvailableProducts();
  };

  checkHandler = checked => {
    this.setState({
      boxChecked: checked
    });
    this.returnAvailableProducts();
  };

  returnAvailableProducts = () => {
    let searArr = this.state.products.filter((e, i) =>
      e.name.includes(this.state.currentSearchTerm)
    );
    this.setState({
      availableProducts: searArr
    });
  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>

        <SearchBar changeHandler={this.changeHandler} />
        <CheckBox changeHandler={this.checkHandler} />
        {this.state.currentSearchTerm == '' ? (
          <ProductTable
            products3000={this.state.products}
            checkcheck={this.state.boxChecked}
          />
        ) : (
          <ProductTable
            products3000={this.state.availableProducts}
            checkcheck={this.state.boxChecked}
          />
        )}
      </div>
    );
  }
}

export default FilterableProductTable;
