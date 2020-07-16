import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import { v4 as uuid } from 'uuid';

const products = data.data.map(product => {
  return {...product, id: uuid()}
})

export default class App extends Component {

  state = {
    query: ''
  }

  setQuery = query => {
    this.setState({
      query: query
    })
  }

  render() {
    return (
      <>
        <h1>IronStore</h1>
        <SearchBar query={this.state.query} setQuery={this.setQuery}/>
        <ProductTable products={products} query={this.state.query}/>
      </>
    )
  }
}