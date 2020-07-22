import React from 'react';
import { Form, Label, Input, FormGroup } from 'reactstrap';


export default function SearchBar({clbkSearch, clbkCheckBox}) {

    const handleChange = (evt) => {
        clbkSearch(evt.target.value);
    }

    const handleCheckBox = (evt) => {
        clbkCheckBox(evt.target.checked)
    }

  return (
    <Form>

      <FormGroup>
        <Label htmlFor="search">Search</Label>
        <Input
          type="text"
          placeholder="Search for a product"
          id="search"
          name="search"
          onChange={handleChange}
        ></Input>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type="checkbox" onChange={handleCheckBox}/> Only show available products
        </Label>
      </FormGroup>

    </Form>
  );
}
