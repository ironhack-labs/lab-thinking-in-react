import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';
import './FilterableProductTable.css';

export default class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
    showInStock: false
  }

  handleChange = (event) => {
    const filteredProducts = this.props.products.filter(e => {
      return e.name.toLowerCase().startsWith(event.target.value)
    })

    this.setState({
      products: filteredProducts
    });
  }

  handleCheck = (event) => {
    if (event.target.checked) {
      const filteredProducts = this.state.products.filter(e => {
        return e.stocked; 
      })
      this.setState({ 
        products: filteredProducts,
        showInStock: true
      })
    } else {
      this.setState({ 
        products: this.props.products,
        showInStock: false 
      })
    }
  }

  render() {
    return (
      <div className='main'>
        <h1>IronStore</h1>
        <SearchBar 
          handleChange={this.handleChange} 
          showInStock={this.state.showInStock}
          handleCheck={this.handleCheck}
        />
        <ProductTable products={this.state.products} />
      </div>
    )
  }
}
