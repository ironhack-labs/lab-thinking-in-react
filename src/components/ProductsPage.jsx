// src/components/ProductsPage.js

import React, { Component } from 'react';
import jsonData from './../data.json';
import ProductsTable from './ProductsTable';
import SearchBar from './SearchBar';
import { Container, Heading } from '@chakra-ui/react';

class ProductsPage extends Component {
  state = {
    products: jsonData,
    searchText: '',
    checkbox: false,
  };

  searchHandler = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  };

  checkboxHandler = (checkbox) => {
    this.setState(prevState => ({
      checkbox: !prevState.checkbox,
    }))
}

  render() {
    return (
      <Container my={8}>
        <Heading my={8}>IronStore</Heading>
        <SearchBar
          my={8}
          searchHandler={this.searchHandler}
          checkboxHandler={this.checkboxHandler}
        />
        <br />
        <ProductsTable
          my={8}
          products={this.state.products}
          searchText={this.state.searchText}
          inStock={this.state.checkbox}
        />
      </Container>
    );
  }
}

export default ProductsPage;
