import React, { Component } from 'react';
import ProductTable from './ProductTable.jsx';
import SearchBar from './SearchBar';

export class FilterableProductTable extends Component {
  state = {
    products: this.props.products.data,
    filteredProducts: this.props.products.data,
    searchBox: '',
    checkedBox: '',
  };

  handleFilter = (event) => {
    this.setState({
      filteredProducts: this.state.products.filter((product) =>
        product.name.toLowerCase().includes(event.target.value.toLowerCase())
      ),
    });
  };

  handleCheckBox = (event) => {
    if (event.target.checked) {
      this.setState({
        filteredProducts: this.state.products.filter(
          (product) => product.stocked === true
        ),
      });
    } else {
      this.setState({ filteredProducts: this.state.products });
    }
    // console.log(event.target.checked);
  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          handleFilterFromParent={this.handleFilter}
          handleCheckBoxFromParent={this.handleCheckBox}
        />
        <ProductTable products={this.state.filteredProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
