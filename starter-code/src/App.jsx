import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import FilterableProductTable from './components/FilterableProductTable';
/* Data */
import productsList from './data.json'

export default class App extends Component {

  state={
    inStock: false,
    searchText: '',
    
  }

  updateSearchText = text => {
    this.setState({ searchText: text});
  }

  handleCheck = () => {
    console.log(this.state.inStock);
    this.setState({ inStock: !this.state.inStock});

  }


  render() {
    return (
    
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar />
        <FilterableProductTable products={productsList}/>
      </div>
    );
  }
}
