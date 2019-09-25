  
import React from "react";

import Form from "react-bootstrap/Form";

export default props => (
  <Form className="mb-3">
    <Form.Group>
      <Form.Label>Search</Form.Label>
      <Form.Control
        type="text"
        value={props.query}
        onChange={event => props.performSearch(event.target.value)}
        placeholder="Query"
      />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Only show products on stock" />
  </Form.Group>
  </Form>
);