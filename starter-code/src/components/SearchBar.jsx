import React from 'react';
import Form from 'react-bootstrap/Form';

const SearchBar = props => {
  return (
    <div>
      <Form>
        <Form.Group controlId="search">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search"
            onChange={props.handleSearch}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Only show products in stock"
            onChange={props.handleCheck}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchBar;
