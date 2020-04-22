import React, { Component } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import '../App.css';

export default class FilterableProductTable extends Component {
  state = {
    search: '',
  };

  setFilter = (search) => {
    console.log('filter is', search);
    this.setState({ search });
  }

  render() {
    const { products } = this.props;
    const { search, setFilter } = this.state;
    return (
      <div className='filterable-product-table'>
        <Header />
        <SearchBar setFilter={this.setFilter} />
        <ProductTable products={products} search={search} />
      </div>
    );
  }
}
