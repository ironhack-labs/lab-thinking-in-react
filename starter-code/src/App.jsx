import React, { Component } from 'react';
import './App.css';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css';
import products from './data.json';
import FilterableProductTable from './Components/FilterableProductTable.js';

UIkit.use(Icons);

export default class App extends Component {

  state = {
    products: products.data,
    filtered: products.data,
    previousSearch: [],
    showStocked: false
  }

  handleSearch = (event) => {
    let products = this.state.products;
    let searchValue = event.target.value;

    let filtered = products.filter( product => product.name.toLowerCase().includes(searchValue.toLowerCase()) );

    this.setState({ filtered: filtered, previousSearch: filtered });
  }

  handleCheckbox = (event) => {
    let products = this.state.filtered;
    let previousSearch = this.state.previousSearch;
    let showStocked = this.state.showStocked;

    if ( showStocked ) showStocked = false;
    else showStocked = true;

    if ( showStocked ) {
      let stockFiltered = products.filter( product => product.stocked === true );

      this.setState({ filtered: stockFiltered, previousSearch: previousSearch, showStocked: showStocked });
    }
    else {
      let filtered = previousSearch;

      this.setState({ filtered: filtered, showStocked: showStocked });
    }

  }

  render() {
    return (
      <div className="App">
        <FilterableProductTable products={this.state.filtered} searchFunction={this.handleSearch} onStock={this.handleCheckbox}/>
      </div>
    );
  }
}
