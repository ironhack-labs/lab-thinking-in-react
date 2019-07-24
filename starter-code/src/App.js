import React, { Component } from 'react';

import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

import { data } from './data.json';
import './App.css';

class App extends Component {
  state = {
    data: [...data],
    products: [...data],
    search: '',
    checked: ''
  }

  handleSearchText = (text) => {
    let filteredProducts = [];
    if(this.state.checked) {
      filteredProducts = this.state.data.filter( product => {
        return product.name.toUpperCase().includes(text.toUpperCase()) && product.stocked === true
      });
    } else {
      filteredProducts = this.state.data.filter( product => {
        return product.name.toUpperCase().includes(text.toUpperCase())
      });
    }

    this.setState({
      search: text,
      products: filteredProducts
    });
  }

  handleCheckBox = (val) => {    
    this.setState({
      checked: val
    }, () => {
      this.handleSearchText(this.state.search)
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 center-align">
            <h1>IronStore</h1>
          </div>
        </div>

        <SearchBar search={this.state.search} checked={this.state.checked} handleSearchText={this.handleSearchText} handleCheckBox={this.handleCheckBox} />

        <ProductTable products={this.state.products} />

      </div>
    );
  }
}

export default App;
