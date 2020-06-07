import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import 'bulma/css/bulma.css';

class FilterableProductTable extends Component {
  state = {
    allProducts: this.props.products.data,
    searchTerm: '',
    stockedToggle: false,
  };

  searchHandler = (inputValue) => {
    this.setState({
      searchTerm: inputValue,
    });
  };

  checkedHandler = (checkedValue) => {
    this.setState({
      stockedToggle: checkedValue,
    });
  };

  render() {
    return (
      <div className="section">
        <div className="columns is-centered">
          <div className="column is-narrow">
            <div className="title is-1 is-primary">IRON PRODUCTS</div>
          </div>
        </div>

        <div className="columns is-centered">
          <div className="column is-6">
            <SearchBar
              checkedCallback={this.checkedHandler}
              onSearchCallback={this.searchHandler}
              products={this.state.allProducts}
              searchTerm={this.state.searchTerm}
            ></SearchBar>
          </div>
        </div>

        <div className="columns is-centered">
          <div className="column is-10">
            <ProductTable
              showStocked={this.state.stockedToggle}
              searchTerm={this.state.searchTerm}
              products={this.state.allProducts}
            ></ProductTable>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterableProductTable;
