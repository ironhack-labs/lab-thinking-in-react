import React from 'react';
import ProductRow from './ProductRow';
import { Table } from 'reactstrap';

export default function ProductTable({ products, searchQuery, onStockCheck }) {
  console.log({ products, searchQuery, onStockCheck });

  const filteredRows = products
    .filter((product) => {
      return (
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (onStockCheck ? product.stocked : true)
      );
    })
    .map((product) => (
      <ProductRow
        key={product.id}
        name={product.name}
        price={product.price}
        searchQuery={searchQuery}
      />
    ));

  console.log(filteredRows);

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{filteredRows}</tbody>
    </Table>
  );
}
