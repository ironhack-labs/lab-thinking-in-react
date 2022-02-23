import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function ProductRow(props) {
  function handleInStock(isInStock, value) {
    if (isInStock) {
      return <span className="green">{value}</span>;
    } else {
      return <span className="red">{value}</span>;
    }
  }
  return props.productRow.map((item) => {
    return (
      <tr key={item.id}>
        <td>
          <p>{handleInStock(item.inStock, item.name)}</p>
        </td>
        <td>
          <p>{item.price}</p>
        </td>
        <td>
          <button onClick={() => {}} className="btn-delete">
            Delete
          </button>
        </td>
      </tr>
    );
  });
}

export default ProductRow;
