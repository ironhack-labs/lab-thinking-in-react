import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function ProductRow(props) {
  
    return (
      <Row>
        <Col md={6}>{props.products.name}</Col>
        <Col md={6}>{props.products.price}</Col>
      </Row>)
}

