import React, { Component } from 'react';
import data from '../data.json';
import SearchBar from '../components/SearchBar';
import { Container } from 'react-bootstrap';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  constructor() {
    super();
    this.state = {
      data: data.data,
      dataCopy: [...data.data]
    };
  }
  findSearchBar = e => {
    let filteredItems = this.state.dataCopy.filter(elm =>
      elm.name.toUpperCase().includes(e.target.value.toUpperCase())
    );
    this.setState({ data: filteredItems });
  };

  render() {
    return (
      <>
        <h1>IronStore</h1>

        <SearchBar findSearchBar={this.findSearchBar} />

        <Container>
          <ProductTable dataInfo={this.state.data} />
        </Container>
      </>
    );
  }
}

export default FilterableProductTable;
