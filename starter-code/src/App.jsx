import React, { Component } from 'react';
import './App.css';
import data from '../src/data';
import FilterableProductTable from './components/filteredProductTable';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dataList : data,
  //     searchString : "",
  //     stocked: true,
  //   } 
  // }


  render() {
    console.log(data);
    return (
      <div className="App">
        <h1>IronStore</h1>
        <FilterableProductTable products={ data } />
      </div>
    );
  }
}
