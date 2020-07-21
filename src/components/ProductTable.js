import React from 'react';
import ProductRow from './ProductRow';
import { Table } from 'react-bootstrap';

const ProductTable = (props) => {
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <ProductRow products={props.products} searchValue={props.searchValue} showStocked={props.showStocked}/>
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
