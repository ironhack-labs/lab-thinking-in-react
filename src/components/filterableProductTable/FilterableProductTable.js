import React from 'react';
import SearchBar from '../searchbar/SearchBar.js'
import ProductTable from '../productTable/ProductTable.js';


class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable data={this.props.products} />
      </div>
    );
  }
}

export default FilterableProductTable;