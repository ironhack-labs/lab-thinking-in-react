import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {

  render() {
    return (
      <div>
        <SearchBar filter={this.props.filter} stockChange={this.props.stockChange}/>
        <ProductTable products={this.props.products} filterText={this.props.filterText} inStockOnly={this.props.inStockOnly} />
      </div>
    );
  }
}

export default FilterableProductTable;
