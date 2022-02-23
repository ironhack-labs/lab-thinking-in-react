import { useState } from 'react';
import jsonData from './../data.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>

        <ProductRow productRow={props.productTable} />
      </tbody>
    </table>
  );
}

export default ProductTable;
