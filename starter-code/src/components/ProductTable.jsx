import React from 'react';
import Table from 'react-bootstrap/Table';
import ProductRow from './ProductRow';

const ProductTable = props => {
  const products = props.products.data;
  const searchedProducts = products.filter(product =>
    product.name.toLowerCase().includes(props.search.toLowerCase())
  );
  const stockedProducts = searchedProducts.filter(product => {
    return !props.stockChecked || product.stocked;
  });
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {stockedProducts.map(product => {
            return <ProductRow key={product.name} product={product} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
