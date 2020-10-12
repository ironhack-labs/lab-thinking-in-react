import React, { Component } from 'react';
import { ProductTable } from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
  constructor() {
    super();
    this.state = {
      dbdata: [],
      checked: true,
    };
  }

  searchBar = (searchValue) => {
    const expresion = new RegExp(searchValue, 'i');

    const search = this.props.data.data.filter((elem) =>
      !this.state.checked
        ? elem.name.match(expresion) && elem.stocked
        : elem.name.match(expresion)
    );

    this.setState({
      dbdata: search,
      checked: !this.state.checked,
    });
  };

  render() {
    return (
      <>
        <SearchBar searchBar={this.searchBar} />
        <ProductTable
          products={this.state.dbdata}
          handleChecked={this.handleChecked}
        />
      </>
    );
  }
}

export default FilterableProductTable;
