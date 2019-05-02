import React, { Component } from 'react';
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable';
import ProductRow from './components/ProductRow.js';
import "./App.css";



class App extends Component {
  constructor(){
    super();
    this.state ={
      list: data.data
    }

  }
  render() {
    return (
      <React.Fragment>
        <FilterableProductTable product={ this.state.list } />
      </React.Fragment>
    );
  }
}

export default App;
