import React from 'react';
import { FormGroup, Input, InputGroup, Label } from 'reactstrap';

export default function SearchBar(props) {
  return (
    <FormGroup>
      <Label htmlFor="search">Search</Label>
      <Input
        type="text"
        name="search"
        id="search"
        value={props.searchQuery}
        onChange={(e) => props.handleSearchChange(e.target.value)}
      />
      <InputGroup>
        <Input
          type="checkbox"
          name="stocked"
          id="stocked"
          checked={props.onStock}
          onChange={(e) => props.handleCheckboxChange(e.target.checked)}
        />
        <Label htmlFor="stocked">Only show products on stock</Label>
      </InputGroup>
    </FormGroup>
  );
}
