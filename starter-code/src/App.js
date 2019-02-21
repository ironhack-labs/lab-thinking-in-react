import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';
import Products from './Components/products';
import SearchBar from './Components/searchBar';

console.log(data.data)

class App extends Component {

  state = {
    data: data.data
  }

  searchFunction = (searchWord, checked) => {
    let newState = {
      ...this.state
    }
    if (checked) {
      newState.data = data.data.filter(product => {
        return (product.name.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1 && product.stocked);
      })
    }

    else {
    newState.data = data.data.filter(product => {
      return product.name.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1;
    })
    }

    this.setState(newState)
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchFunctionProp={this.searchFunction} />
        <Products dataProp={this.state.data} />
      </div>
    );
  }
}

export default App;
