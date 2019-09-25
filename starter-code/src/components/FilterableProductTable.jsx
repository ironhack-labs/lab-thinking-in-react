import React, { Component } from 'react';
import ProductTable from './ProductTable';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <Container>
          {/* <input type="text" value={this.props.products.category} /> */}
          <input type="text" value={this.props.products.name} />
          <input type="text" value={this.props.products.price} />
        </Container>
      </div>
    );
  }
}
