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

  filterProduct(searchInput) {
    this.setState({
      productsList: this.state.productsList.filter((product) =>
        product.name.toLowerCase().includes(searchInput.toLowerCase())
      ),
    });
  }

  render() {
    return (
      <Container>
        <h1>IronStore</h1>
        <SearchBar
          searchHandler={(inputText) => this.filterProduct(inputText)}
        />
        <ProductTable products={this.state.productsList}></ProductTable>
      </Container>
    );
  }
}
export default FilterableProducTable;
