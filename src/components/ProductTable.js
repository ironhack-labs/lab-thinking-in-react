import React from 'react';

import { Row, Col } from 'react-bootstrap';
import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {
  return (
    <>
      <Row>
        <Col md={6}>Name</Col>
        <Col md={6}>Price</Col>
      </Row>
      {products.map((product) => (
        <ProductRow {...product} key={product.id} />
      ))}
    </>
  );
};
export default ProductTable;
