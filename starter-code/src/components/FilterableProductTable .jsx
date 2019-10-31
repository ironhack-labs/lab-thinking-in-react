import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'

class FilterableProductTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allProducts: this.props.allProducts.data,
      displayProducts: this.props.allProducts.data, // this will either display all products or the search result
    }
  }

  handleSearchDisplay = e => {
    const { value, type, checked } = e.target
    let filter;
    type === 'checkbox' ? filter = checked : filter = value
    typeof filter === 'string' ? this.filterProducts(filter) : this.filterInStockProducts(filter)
  }

  filterInStockProducts = filter => {
    filter ? this.setState({ displayProducts: this.state.allProducts.filter(p => p.stocked) }) : this.setState({ displayProducts: this.state.allProducts })
  }

  filterProducts = searchTerm => {
    this.setState({
      displayProducts: this.props.allProducts.data.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
  }

  render() {
    console.log('hello')
    return (
      <div className="FilterableProductTable">
        <SearchBar handleSearchDisplay={this.handleSearchDisplay} />
        <ProductTable displayProducts={this.state.displayProducts} />
      </div>
    )
  }
}

export default FilterableProductTable;
