import React, { Component } from 'react';
import './FPT.css';

import SearchBar from '../components/SearchBar.js';
import ProductTable from '../components/ProductTable.js';

class FilterableProductTable extends Component {
  // constructor here to define single source of truth in 'FilterableProductTable'
  constructor(props) {
    super(props);
    this.state = {
      productsJSON: props.products,
      currentQuery: '',
    };
  }

  updateProductList = (searchQueryFromSearchBarJS) => {
    this.setState({
      currentQuery: searchQueryFromSearchBarJS,
    });

    // using 'this.props.products.data.filter' instead of 'this.state.productsJSON..' because otherwise process would filter the filtered -> converging against 0
    // with this, backslash works
    const filteredProductList = this.props.products.data.filter((item) =>
      item.name.toLowerCase().includes(searchQueryFromSearchBarJS.toLowerCase())
    );

    this.setState({
      productsJSON: { data: filteredProductList },
    });
  };

  render() {
    return (
      <div className="filterableProductTable">
        <SearchBar
          products={this.state.productsJSON}
          update={this.updateProductList}
        />
        <ProductTable
          products={this.state.productsJSON}
          queryForFilteringFirstLevel={this.state.currentQuery}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
