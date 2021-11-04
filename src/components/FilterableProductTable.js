import React from "react";
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
    render() {
        return (
          <table>
          <thead className='title'>IronStore</thead>
            <SearchBar listOfProducts={this.props.listOfProducts} />
            <ProductTable listOfProducts={this.props.listOfProducts} />
          </table>
        );
    }
}

export default FilterableProductTable;