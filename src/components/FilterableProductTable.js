import React from 'react';

import { Component } from 'react';
import { Container } from 'react-bootstrap';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProducTable extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
    };
  }

  loadProductsList(products) {
    this.setState({ productsList: products });
  }

  componentDidMount() {
    this.loadProductsList(this.props.products);
  }

  render() {
    return (
      <Container>
        <h1>IronStore</h1>
        <SearchBar />
        <ProductTable products={this.state.productsList}></ProductTable>
      </Container>
    );
  }
}
export default FilterableProducTable;
