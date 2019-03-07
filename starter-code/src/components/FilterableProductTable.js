import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'
import '../App.css';

class FilteredProductTable extends Component {

  state = {
    products:this.props.products.data
  }

  render() {
    return (
      <div className="App">
        <header className="FilteredProductTable">
          <h1>IronStore</h1>
          <SearchBar />
          <ProductTable products={this.props.data}/>
        </header>
      </div>
    );
  }

}

export default FilteredProductTable;
