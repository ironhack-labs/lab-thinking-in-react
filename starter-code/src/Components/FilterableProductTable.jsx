import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'reactstrap';
import ProductTable from './ProductTable';

const FilterableProductTable = (props) => (
  <Table hover>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <ProductTable products={props.filtredProducts} />
    </tbody>
  </Table>
);

export default FilterableProductTable;
