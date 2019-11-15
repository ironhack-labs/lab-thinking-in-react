import React, { Component } from 'react';
import Search from '../Search/Search';
import Table from '../Table/Table';
import './ProductTable.css';

export default class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableProducts: this.props.products,
      search: '',
      filter: false
    };
  }
  handleSearch = e => {
    this.setState({ search: e.target.value }, () => {
      const { availableProducts, search } = this.state;
      let results = { data: [] };

      if (search !== '') {
        availableProducts.data.forEach(product => {
          if (product.name.toLowerCase().includes(search.toLowerCase())) {
            results.data.push(product);
          }
        });
      } else {
        results = { data: this.props.products.data };
      }

      return this.setState({ availableProducts: { data: results.data } });
    });
  };

  filterProducts = () => {
    this.setState({
      filter: !this.state.filter
    });
  };
  render() {
    const availableProducts =
      this.state.filter === true
        ? {
            data: this.state.availableProducts.data.filter(item => item.stocked)
          }
        : this.state.availableProducts;
    return (
      <div className="product-table">
        <h1>IronStore</h1>
        <Search
          handleSearch={this.handleSearch}
          filterProducts={this.filterProducts}
        />
        <Table products={availableProducts} />
      </div>
    );
  }
}
