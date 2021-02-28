import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import React, { Component } from 'react';

export default class FilterableProductTable extends Component {
  state = {
    search: '',
    stocked: false,
  };

  handleSearch = (event) => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;

    //console.log(`loggin value`, value);

    this.setState({
      [name]: value,
    });
  };

  render() {
    const filteredProducts = this.props.products.filter((product) => {
      if (this.state.search === '') {
        return product;
      }
      return (
        product.name.toLowerCase().includes(this.state.search.toLowerCase()) &&
        //checkbox not working yet:
        this.state.stocked === product.stocked
      );
    });
    // console.log(filteredProducts);

    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar state={this.state} handleInput={this.handleSearch} />
        <ProductTable products={filteredProducts} />
      </div>
    );
  }
}
