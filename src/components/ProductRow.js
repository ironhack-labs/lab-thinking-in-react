import React from 'react';

import { Row, Col } from 'react-bootstrap';

const ProductRow = ({ name, price }) => (
  <Row>
    <Col md={6}>{name}</Col>
    <Col md={6}>{price}</Col>
  </Row>
);
export default ProductRow;
