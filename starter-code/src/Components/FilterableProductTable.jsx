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
      filteredData: data
    };
    this.handleChangeTextField = this.handleChangeTextField.bind(this);
    // this.getFilteredData = this.getFilteredData.bind(this);
  }

  handleChangeTextField(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
    const searchString = this.state.searchField;
    const data = this.state.data;
    let result;
    if (searchString.length === 0) {
      result = data;
    } else {
      result = data.filter(e => e.includes(searchString));
    }
    this.setState({
      filteredData: result
    });
  }

  // getFilteredData() {}

  render() {
    return (
      <div>
        <h1>Iron Store</h1>
        <SearchBar
          handleChangeTextField={this.handleChangeTextField}
          searchFieldValue={this.state.searchField}
        />
        <ProductTable filteredData={this.state.filteredData} />
      </div>
    );
  }
}
