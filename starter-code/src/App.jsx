import React from 'react';
import './App.css';
import data from './data.json'
import FilterableProductTable from './components/filterableProductTable/FilterableProductTable';

export default class App extends React.Component {
  constructor(){
    super();
    this.products = [...data.data]

    this.state = {
      products : this.products
    }
  }
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={this.state.products}></FilterableProductTable>

      </div>
    );
  }
}
