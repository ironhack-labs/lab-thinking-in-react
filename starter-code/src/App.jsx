import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/table.js';
import SearchBar from './components/searchbar.js';
import dataJSON from './data.json';

export default class App extends Component {
  state = { shopData: dataJSON.data };

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar />
        <Table datas={this.state.shopData} />
      </div>
    );
  }
}

