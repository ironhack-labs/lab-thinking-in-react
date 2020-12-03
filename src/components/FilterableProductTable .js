import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  state = {
    // data: this.props.products,
    searchValue: '',
    checked: false,
  };

  searchHandler = (e) => {
    this.setState({ searchValue: e.target.value.toLowerCase() });
  };

  onCheckbox = (e) => {
    let checked = e.target.checked;
    // console.log(e.target.checked);

    // let filtered = this.state.data.filter((item) => {
    //   if (item.stocked === checked) {
    //     return true;
    //   }

    this.setState({
      checked: checked,
    });
  };

  render() {
    // console.log('stocked', this.props.products[0].stocked);

    const filteredProducts = this.props.products.filter((filteredProduct) => {
      // console.log('filteredProduct', filteredProduct);

      return filteredProduct.name
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase());
    });
    let stockedProducts = filteredProducts;
    if (this.state.checked) {
      stockedProducts = filteredProducts.filter((item) => {
        if (item.stocked === this.state.checked) {
          console.log(item);
          return true;
        }
      });
    }

    // if (this.state.teacher) {
    //   filteredUsers = filteredUsers.filter((filteredUser) => {
    //     return filteredUser.role === "teacher";
    //   });
    // }

    return (
      <>
        <h1>IronStore</h1>
        <SearchBar onSearch={this.searchHandler} onCheckbox={this.onCheckbox} />
        <ProductTable products={stockedProducts} />
      </>
    );
  }
}

export default FilterableProductTable;
