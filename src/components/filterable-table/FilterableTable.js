import React, { Component } from 'react';
import './FilterableTable.css';
import SearchBar from '../search-bar/SearchBar';
import ProductTable from '../product-table/ProductTable';

class FilterableTable extends Component {
  state = {
    product: this.props.products.data,
    search: '',
    counter: 0,
  };

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  handleChange2 = (event) => {
    const stockedProduct = this.state.product.filter((el) => {
      return el.stocked === true;
    });

    if (this.state.counter % 2 === 0)
      this.setState({
        product: stockedProduct,
        counter: this.state.counter + 1,
      });

    if (this.state.counter % 2 === 1)
      this.setState({
        product: this.props.products.data,
        counter: this.state.counter + 1,
      });
  };

  render() {
    const filteredProduct = this.state.product.filter((el) => {
      return el.name.toLowerCase().includes(this.state.search.toLowerCase());
    });

    console.log(this.state.product);

    return (
      <div className="FilterableProductTable">
        <h1>IronStore</h1>
        <SearchBar
          handleChange={this.handleChange}
          handleChange2={this.handleChange2}
        />
        <ProductTable product={filteredProduct} />
      </div>
    );
  }
}

export default FilterableTable;
