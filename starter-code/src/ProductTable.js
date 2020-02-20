import React, { Component } from 'react';
import ProductRow from './ProductRow';

const ProductTable = props => {
  console.log(props);
  return (
    <div className="table-container">
      <table>
        <thead className="tablehead">
          <tr>
            <th>
              <strong>Name</strong>
            </th>
            <th>
              <strong>Price</strong>
            </th>
          </tr>
        </thead>
        <ProductRow data={props.data} search={props.search} />
      </table>
    </div>
  );
};

export default ProductTable;
