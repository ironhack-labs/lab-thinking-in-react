import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import FilterableProductTable from './components/FilterableProductTable';
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
       <FilterableProductTable  />
      </div>
    );
  }
}
