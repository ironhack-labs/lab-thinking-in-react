import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = (props) => {
  //PROPS => props.products, props.handleSearch, props.searchValue, props.handleStock
  return (
    <div className="text-center mb-5">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Search</Form.Label>
        <Form.Control
          type="text"
          onChange={props.handleSearch}
          value={props.searchValue}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Only show products on stock"
          onChange={props.handleStock}
        />
      </Form.Group>
    </div>
  );
};

export default SearchBar;
