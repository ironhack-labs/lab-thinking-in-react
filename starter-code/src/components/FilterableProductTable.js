import React, { Component } from 'react';
import data from '../data.json';
import ProductTable from './ProductTable.js';
import SearchBar from './SearchBar.js';

class FilterableProductTable extends Component {
  state = {
      searchquery: ""
  }

  callme = (val) => {
    console.log("on m'a transmis la valeur " + val)
    this.setState({searchquery: val});
  }


  render() {
    return (
      <div className="FilterableProductTable">
        <h1>IronStrore</h1>

        <SearchBar callme={this.callme} />
        <br/>
        <ProductTable searchquery={this.state.searchquery} />
      

        
      </div>
    );
  }
}

export default FilterableProductTable