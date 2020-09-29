import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import data from '../data.json'
import 'bulma/css/bulma.css';

class FilterableProductTable extends Component {
  state = {
    productList: data.data,
    search: '',
    checkbox: false
  }

  handleSearch = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCheckbox = () => {
    this.setState({
      checkbox: !this.state.checkbox
    });
  };

  render() {
    const filteredProductList = [...this.state.productList].filter(product => {
      if (this.state.checkbox) {
        if (product.name.toLowerCase().includes(this.state.search.toLowerCase()) && product.stocked) {
          return product;
        }
      } else if (product.name.toLowerCase().includes(this.state.search.toLowerCase())) {
        return product;
      }
    });

    return (
      <div className='container'>
        <h1 className='title is-1 has-text-centered'>IronStore</h1>
        <SearchBar search={this.state.search} onChange={this.handleSearch} checkbox={this.state.checkbox}
          handleCheckbox={this.handleCheckbox} />
        <ProductTable filteredProductList={filteredProductList} />
      </div>
    )
  }
}

export default FilterableProductTable;