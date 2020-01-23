import React, { Component } from 'react';
import { data } from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      searchField: '',
      filteredData: data,
      isOnStockFilter: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getFilteredData = this.getFilteredData.bind(this);
  }

  handleInputChange(event) {
    const { value, name, type, checked } = event.target;
    const returnValue = type === 'checkbox' ? checked : value;
    this.setState(
      {
        [name]: returnValue
      },
      // TODO: Achei no google a opção de passar como callback. Fiquei curioso sobre quais são minhas outras opção. Que papai do chão me ilumine.
      this.getFilteredData
    );
  }

  getFilteredData() {
    const isIncludedFilter = (element, string) => {
      return (
        element.name.toLowerCase().includes(string) ||
        element.name.toUpperCase().includes(string)
      );
    };
    const removeOutOfStockFilter = element => {
      return element.stocked;
    };

    const searchString = this.state.searchField;
    let result = this.state.data;

    if (this.state.isOnStockFilter)
      result = result.filter(removeOutOfStockFilter);
    if (searchString.length > 0)
      result = result.filter(e => isIncludedFilter(e, searchString));
    this.setState({
      filteredData: result
    });
  }

  render() {
    return (
      <div>
        <h1>Iron Store</h1>
        <SearchBar
          handleInputChange={this.handleInputChange}
          searchFieldValue={this.state.searchField}
          isOnStockFilter={this.state.isOnStockFilter}
        />
        <ProductTable filteredData={this.state.filteredData} />
      </div>
    );
  }
}
