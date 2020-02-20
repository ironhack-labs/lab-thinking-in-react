import React, { Component } from 'react';
import logo from './logo.svg';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductRow from './ProductRow';
import dataJSON from './data.json';

import './App.css';

export default class App extends Component {
  state = {
    data: dataJSON.data,
    searchText: '',
    stocked: false
  };

  updateSearchText = text => {
    this.setState({
      searchText: text
    });
  };

  updateCheckBox = filtered => {
    console.log('stocked', filtered);
    this.setState({
      data: filtered
    });
  };

  handleCheckboxChange = event => {
    console.log(event.target.name, 'event');
    let key = event.target.name;
    this.setState(
      {
        [key]: !this.state[key] //if i click checkbox set it to opposite
      },
      () => {
        var filtered;
        if (this.state[key]) {
          filtered = dataJSON.data.filter(stock => {
            return stock.stocked == true;
          });
        } else {
          filtered = dataJSON.data;
          console.log(filtered);
        }
        this.updateCheckBox(filtered);
        // this.setState({
        //   //   stocked: true
        //   data: filtered
        // });
      }
    );
  };

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar
          updateSearchText={this.updateSearchText}
          search={this.state.searchText}
          data={this.state.data}
          stocked={this.state.stocked}
          handleCheckboxChange={this.handleCheckboxChange}
        />
        <ProductTable
          data={this.state.data}
          search={this.state.searchText}
        ></ProductTable>
      </div>
    );
  }
}
