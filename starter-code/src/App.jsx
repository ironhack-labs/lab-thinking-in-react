import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable.js';
import data from './data.json';
import SearchBar from './components/SearchBar/SearchBar.js';

export default class App extends Component {
  state = {
    search: '',
    checked: false,
  };

  render() {
    let updateSearch = (val) => {
      this.setState({
        search: val,
      });
      console.log(this.state.val);
    };

    let updateChecked = (val) => {
      this.setState({
        checked: val,
      });
      console.log(this.state.checked);
    };

    let dataNew = [];
    [...data.data].forEach((i) => {
      if (this.state.checked) {
        if (i.name.includes(this.state.search) && i.stocked) {
          dataNew.push(i);
        }
      } else if (i.name.includes(this.state.search)) {
        dataNew.push(i);
      }
    });

    // console.log(this.state.search);
    // console.log([dataNew]);

    return (
      <div className="App">
        <h1>Ironstore</h1>
        <SearchBar
          search={this.state.search}
          checked={this.state.checked}
          updateSearch={updateSearch}
          updateChecked={updateChecked}
        />
        <FilterableProductTable data={dataNew} search={this.state.search} />
      </div>
    );
  }
}
