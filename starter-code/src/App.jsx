import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import data from './data';
import SearchBar from './components/SearchBar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data,
      check: false
    };
    this.doSearch = this.doSearch.bind(this);
    this.toggleCheckBox = this.toggleCheckBox.bind(this);
  }

  doSearch(value) {
    this.setState({
      query: value
    });
  }

  toggleCheckBox(value) {
    this.setState({
      check: value
    });
  }

  get filterProductList() {
    const query = this.state.query;
    return this.checkBox.filter(data =>
      data.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  get checkBox() {
    const check = this.state.check;
    const data = this.state.data;
    return check ? data.data.filter(data => data.stocked === check) : data.data;
  }

  render() {
    console.log(this.state.check);
    return (
      <div className="App">
        <SearchBar
          query={this.state.query}
          doSearch={this.doSearch}
          check={this.state.check}
          toggleCheckBox={this.toggleCheckBox}
        />
        <ProductList filterProductList={this.filterProductList} />
      </div>
    );
  }
}
