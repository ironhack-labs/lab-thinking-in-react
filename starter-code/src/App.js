import React, { Component } from 'react';
import './App.css';
import data from "./data.json";
import FilterableProductTable from "./components/FilterableProductTable"
class App extends Component {
constructor(props) {
  super(props);
  this.state={
    products: data.data
  }
}

  render() {
    return (
      <FilterableProductTable products={this.state.products} />
    );
  }
};

export default App;