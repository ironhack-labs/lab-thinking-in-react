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
    this.getFilteredData = this.getFilteredData.bind(this);
  }

  handleChangeTextField(event) {
    const { value, name } = event.target;
    this.setState(
      {
        [name]: value
      },
      // TODO: Achei no google a opção de passar como callback. Fiquei curioso sobre quais são minhas outras opção. Que papai do chão me ilumine.
      this.getFilteredData
    );
  }

  getFilteredData() {
    const searchString = this.state.searchField;
    const data = this.state.data;
    let result;
    if (searchString.length === 0) {
      result = data;
    } else {
      result = data.filter(
        e =>
          e.name.toLowerCase().includes(searchString) ||
          e.name.toUpperCase().includes(searchString)
      );
    }
    // nada está chamando essa função
    console.log(result);
    this.setState({
      filteredData: result
    });
  }

  render() {
    return (
      <div>
        <h1>Iron Store</h1>
        <SearchBar
          // getFilteredData={this.getFilteredData}
          handleChangeTextField={this.handleChangeTextField}
          searchFieldValue={this.state.searchField}
        />
        <ProductTable filteredData={this.state.filteredData} />
      </div>
    );
  }
}
