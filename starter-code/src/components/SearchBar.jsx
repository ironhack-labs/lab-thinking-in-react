import React from 'react';
import Form from 'react-bootstrap/Form';

export default props => (
  <Form>
    <Form.Group>
      <Form.Label>Search</Form.Label>
      <Form.Control
        type="text"
        value={props.query}
        onChange={event => props.search(event.target.value)}
      />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check
        type="checkbox"
        label="Only show products on stock"
        onChange={props.onStock}
      />
    </Form.Group>
  </Form>
);
