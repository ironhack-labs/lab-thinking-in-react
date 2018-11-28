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

  searchStock(check) {
    let newData = data.filter(value => {
      console.log(value.stocked+'' === check)
      return value.stocked+'' === check
    })
   // console.log(check, data, newData)
    this.setState({data: newData})
  }

  render() {
    return (
      <div className="App">
        <SearchBar 
          onQueryChange={e => this.searchData(e)} 
          isStockedChange={e => this.searchStock(e)}/>
        <ProductTable {...this.state} />
      </div>
    );
  }
}

export default App;
