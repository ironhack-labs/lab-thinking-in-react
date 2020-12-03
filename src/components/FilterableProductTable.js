import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import React, { Component } from 'react';

export default class FilterableProductTable extends Component {
    state = {
        query: '',
        inStock: false
    }

    setQuery = (query) => {
        console.log('query', query);
        this.setState({
            query: query
        })
    }

    setChecked = (inStock) => {
        // console.log('checked', inStock);
        // console.log('state', this.state);
        this.setState({
            inStock: !this.state.inStock
        })
    }

  render() {
    //   console.log("main page query", this.state.query);
    return (
      <>
        <h1>Ironstore</h1>
        <SearchBar query={this.state.query} inStock={this.state.inStock} setQuery={this.setQuery} setChecked={this.setChecked}/>
        <ProductTable products={this.props.products} query={this.state.query} inStock={this.state.inStock}/>
      </>
    );
  }
}
