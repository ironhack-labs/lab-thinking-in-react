import React, { Component } from 'react';
import data from '../data.json';
import { Col, Row } from 'react-bootstrap';
import FindItems from './Items';
import SearchBar from './SearchBar.js';

class ProductTable extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Row>
          <Col md={6}>
            <h2>Name</h2>
          </Col>
          <Col md={6}>
            <h2> Price</h2>
          </Col>
        </Row>

        {this.props.dataInfo.map((items, idx) => (
          <FindItems key={idx} {...items} />
        ))}
      </>
    );
  }
}

export default ProductTable;
