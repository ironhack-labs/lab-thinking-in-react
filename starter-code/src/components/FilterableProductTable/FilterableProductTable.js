import React, { Component } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';

class FilterableProductTable extends Component {
  render() {
    console.log(this.props.products);
    return (
      <div>
        <SearchBar
          functionSearchBarCom={search => this.props.functionSearchBar(search)}
          functionCheckBoxCom={e => this.props.functionCheckBox(e)}
        ></SearchBar>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <ProductTable products={this.props.products}></ProductTable>
        </table>
      </div>
    );
  }
}

export default FilterableProductTable;
