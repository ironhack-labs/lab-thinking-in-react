import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export function SearchBar({ callback1, callback2 }) {
  return (
    <div className="searchBar">
      <Form>
        <FormGroup>
          <Label for="productSearch">Search</Label>
          <Input
            type="text"
            name="productSearch"
            id="productSearch"
            onChange={callback1}
          />
        </FormGroup>
        <FormGroup>
          <Label for="inStock">
            <Input
              type="checkbox"
              name="inStock"
              id="inStock"
              onChange={callback2}
            />
            Only show products in stock
          </Label>
        </FormGroup>
      </Form>
    </div>
  );
}

export default SearchBar;
