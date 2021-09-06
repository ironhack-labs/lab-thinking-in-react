import React from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';

import './FilterableProductTable.css'

export default class FilterableProductTable extends React.Component {
  state = {
    products: this.props.products,
    filteredProd: this.props.products,
    search: '',
    checkbox: false,
  };

  onChangeSearch = (value) => {
    this.getProducts();
    this.setState({ search: value });
  };

  onChangeCheckbox = (value) => {
    this.getProducts();
    this.setState({ checkbox: value });
  };

  getProducts = () => {
    const duplicateProducts = [...this.state.products];
    const filteredProducts = duplicateProducts.filter(
      (product) =>
        product.name
          .toLowerCase()
          .indexOf(this.state.search.toLocaleLowerCase()) >= 0
    );

    if (this.state.checkbox === false) {
      const checkboxProducts = filteredProducts.filter(
        (product) => product.stocked === true
      );
      console.log(checkboxProducts);
      this.setState({ filteredProd: [...checkboxProducts] });
    } else {
      this.setState({ filteredProd: [...filteredProducts] });
    }
  };

  render() {
    return (
      <div className="FilterableProductTable">
        <SearchBar
          onChangeSearch={this.onChangeSearch}
          onChangeCheckbox={this.onChangeCheckbox}
          value={this.state.search}
        />
        <ProductTable products={this.state.filteredProd} />
      </div>
    );
  }
}
