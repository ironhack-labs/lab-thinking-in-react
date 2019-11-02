import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'
import Products from '../data.json'

class FilterableProductTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayProducts: Products.data
    }
  }

  filterProducts = searchTerm => {
    this.setState({
      displayProducts: Products.data.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
  }

  render() {
    console.log('hello')
    return (
      <div className="FilterableProductTable">
        <SearchBar filterProducts={this.filterProducts} />
        <ProductTable displayProducts={this.state.displayProducts} />
      </div>
    )
  }
}

export default FilterableProductTable;
