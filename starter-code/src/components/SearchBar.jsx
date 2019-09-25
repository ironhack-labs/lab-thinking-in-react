import React from 'react';

import Form from 'react-bootstrap/Form';

export default props => (
  <div>
    <Form>
      <Form.Group>
        <Form.Label>
          <h3>Search</h3>
        </Form.Label>
        <Form.Control
          type="text"
          value={props.query}
          onChange={event => props.doSearch(event.target.value)}
          placeholder="Type in your search"
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="checkbox"
          checked={props.check}
          onChange={event => props.toggleCheckBox(event.target.checked)}
          label="Only show products on stock"
        />
      </Form.Group>
    </Form>
  </div>
);
