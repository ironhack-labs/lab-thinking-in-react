import React from 'react';
import { Input, Label, FormGroup } from 'reactstrap';

function SearchBar({ callback, inStock }) {
  return (
    <div>
      <Label htmlFor="search">Search</Label>
      <Input
        type="text"
        name="search"
        onChange={callback}
        placeholder="Search..."
      />
      <FormGroup check>
        <Label htmlFor="checkbox" check>
          <Input type="checkbox" name="checkbox" onClick={inStock} />
          In Stock
        </Label>
      </FormGroup>
    </div>
  );
}

export default SearchBar;
