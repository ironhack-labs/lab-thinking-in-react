import React, { Component } from 'react';
import ProductRow from './ProductRow';
import Table from 'react-bootstrap/Table';

export default props => (
  <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {props.products.map(product => (
        <ProductRow products={product} key={product.name} />
      ))}
    </tbody>
  </Table>
);
