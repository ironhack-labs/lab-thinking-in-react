import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import FilterableProductTable from './Components/FilterableProductTable';
import data from './data.json';
export default class App extends Component {
  state = {
    filter: '',
    isChecked: false,
  };
  change = (name, value) =>
    this.setState({
      [name]: value,
    });
  render() {
    let filtredProducts = data.data.filter((x) =>
      x.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );

    if (this.state.isChecked) {
      filtredProducts = filtredProducts.filter((x) => x.stocked);
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <SearchBar {...{ ...this.state, change: this.change }} />
          <FilterableProductTable filtredProducts={filtredProducts} />
        </main>
      </div>
    );
  }
}
