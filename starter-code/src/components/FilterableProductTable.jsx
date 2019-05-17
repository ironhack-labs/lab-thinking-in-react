import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  state = {};
  render () {
    return (
      <React.Fragment>
        <h1>IronStore</h1>
        <SearchBar />
        <ProductTable />
      </React.Fragment>
    );
  }
}

export default FilterableProductTable;
