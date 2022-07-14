import { useState } from 'react'
import { Form } from 'react-bootstrap'

function SearchBar () {
    return (
        <Form>
          <Form.Group className="mb-3" controlId="formSearchBar">
            <Form.Label>Search</Form.Label>
            <Form.Control type="text" />
            <Form.Check type="checkbox" label="Only show products in stock" />
          </Form.Group>            
        </Form>
        )
}

export default SearchBar
