import React from 'react';
import Form from 'react-bootstrap/Form';

export default props => (
  <Form>
    <Form.Group>
      <Form.Label style={{ textAlign: 'center' }}>Search</Form.Label>
      <Form.Control
        type="text"
        value={props.query}
        onChange={event => props.search(event.target.value)}
      />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check
        style={{ textAlign: 'center' }}
        type="checkbox"
        checked={props.checked}
        label="Only show products on stock"
        onChange={event => props.toggleCheckBox(event.target.checked)}
      />
    </Form.Group>
  </Form>
);
