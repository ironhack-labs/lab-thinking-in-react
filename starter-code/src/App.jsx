import React, {Component} from 'react';
import './App.css';
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";
import Data from './data.json';

export default class App extends Component {

  state = {
    searchValue: '',
    onlyShowStock: false,
  };

  handleSearchChange = (state) => {
    this.setState(state);
  };

  render() {
    const {searchValue, onlyShowStock} = this.state;
    const filteredProducts = Data['data'].filter(product => {
        if (product.name.toLowerCase().includes(searchValue.toLowerCase()) && ((onlyShowStock && product.stocked) || !onlyShowStock )) return product;
      }
    );
    return (
      <div className="App">
        <SearchBar searchParams={{searchValue, onlyShowStock}} onChangeSearch={this.handleSearchChange}/>
        <ProductTable products={filteredProducts}/>
      </div>
    );
  }
}
