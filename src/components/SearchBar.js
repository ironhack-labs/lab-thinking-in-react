import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = (props) => {
  return (
    <div className="search-bar text-center">
      <Form>
        <Form.Group>
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            name="searchQuery"
            placeholder="Browse products..."
            onChange={props.handleChange}
            value={props.searchParam}
          />
        </Form.Group>
        {['checkbox'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Show products in stock only"
              type={type}
              id={`inline-${type}-2`}
              onChange={props.handleFilter}
            />
          </div>
        ))}
      </Form>
    </div>
  );
};

export default SearchBar;
