import React from 'react';
import ProductRow from './ProductRow';
import { Table } from 'react-bootstrap';

const ProductTable = (props) => {
  const productsList = props.products.data
    .filter((product) => {
      if (props.filterCheckbox) {
        return product.stocked === true;
      } else {
        return product.name
          .toLowerCase()
          .includes(props.searchParam.toLowerCase());
      }
    })
    .map((product) => (
      <ProductRow
        key={product.name}
        name={product.name}
        price={product.price}
        category={product.category}
        stocked={product.stocked}
      />
    ));

  return (
    <div className="product-table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>In Stock</th>
          </tr>
        </thead>
        <tbody>{productsList}</tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
