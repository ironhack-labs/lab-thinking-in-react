import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import _ from 'lodash';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {

  state = {
    allProducts: this.props.products.data,
    searchTerm: ""
  };

  searchHandler = (inputValue) => {

    this.setState({
        searchTerm: inputValue,
    })
  }


  render() {

    let filteredFoods = this.state.allProducts.filter((sp) => sp.name.includes(this.state.searchTerm))

    return (
      <div className="section">
        <div className="columns is-centered">
          <div className="column is-10">
            <div className="title is-1 is-primary"></div>
            <SearchBar onSearchCallback={this.searchHandler} products={this.state.allProducts} searchTerm={this.state.searchTerm}></SearchBar>
            <ProductTable searchTerm={this.state.searchTerm} products={this.state.allProducts}></ProductTable>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterableProductTable;
