import React from 'react';
import { Input, FormGroup, Label } from 'reactstrap';

const SearchBar = (props) => {
  return(
    <div>
      <Input type="text" name="search" value={props.search} onChange={e => props.onSearch(e)}/>
      <FormGroup check>
          <Label check>
            <Input name="checkbox" type="checkbox" onClick={e => props.onCheck(e)}/>{' '}
            Only show products in stock
          </Label>
        </FormGroup>
    </div>
  )
};

export default SearchBar;