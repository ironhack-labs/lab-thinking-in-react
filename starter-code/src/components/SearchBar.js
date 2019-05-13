import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import { Mycontext } from '../context'

const SearchBar = () => {
  return (
    <div>
      <Mycontext.Consumer>
        {({ handleSearch, handleCheck }) => {
          return (
            <div>
              <InputGroup className="mb-3">
                <FormControl onChange={e => handleSearch(e)}/>
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">search</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
              <input className="mb-3" type="checkbox" onClick={e => handleCheck(e)} /> Only show products on stock
            </div>
          )  
        }}
      </Mycontext.Consumer>
    </div>
  )
}

export default SearchBar
