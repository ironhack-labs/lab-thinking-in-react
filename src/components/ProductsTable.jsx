import React from 'react';
import { Table } from 'react-bootstrap';
import ProductRow from './ProductRow';

const productsTable = (props) => {
  const listProducts = () =>
    props.products
      .filter((product) =>
        product.name.toLowerCase().includes(props.searchParam.toLowerCase())
      )
      .map((product) => (
        <ProductRow
          key={product.name}
          name={product.name}
          price={product.price}
          hasStock={product.stocked}
        />
      ));
  return (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
            {listProducts()}
        </tbody>
      </Table>
  );
};

export default productsTable;
