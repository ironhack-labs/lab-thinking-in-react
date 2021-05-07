import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar.js'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {
    state = {
        query: '',
        stocked: false
    }

    productSearch = event => {
        const value = event.target.value;
        this.setState({
            query: value,
        })
    }

    handleInputChange = product => {
        const name = product.target.name;
        const value = product.target.type === 'checkbox' ? product.target.checked : product.target.value;
        this.setState({
          [name]: value
        });
      }

  render () {

    return (
      <div className="App">
        <header className="App-header">
        
          <h1>IronStore</h1>

          <SearchBar
          handleChange={this.productSearch}
          handleInputChange={this.handleInputChange}
          stocked={this.state.stocked}

          />

          <ProductTable
          data={this.props.products}
          query={this.state.query}
          stocked={this.state.stocked}
          />

        </header>
      </div>
    );
  }   
}