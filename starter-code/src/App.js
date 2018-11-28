import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

import { data } from './data.json';


class App extends Component {
  state = {
    data: data,
  }

  searchData(query) {
    let newData = data.filter(value => {
      return value.name.includes(query)
    });
    this.setState({data: newData})
  }

  render() {
    return (
      <div className="App">
        <SearchBar onQueryChange={e => this.searchData(e)} />
        <ProductTable {...this.state} />
      </div>
    );
  }
}

export default App;
