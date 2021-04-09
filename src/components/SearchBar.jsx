import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'

let SearchBar = ({ handleInput, handleCheck }) => {
  return (
    <div className="m-4 w-50 ml-auto mr-auto">
        <Form>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="search"> <span role="img" aria-label="search">🔎</span> </InputGroup.Text>
                </InputGroup.Prepend>
                    <FormControl
                    placeholder="Seach items"
                    aria-label="search"
                    aria-describedby="search"
                    id="search"
                    onChange={(e) => handleInput(e.target.value)}
                    />
            </InputGroup>
                <Form.Group controlId="checkbox">
                    <Form.Check type="checkbox" label="Only show products on stock" id="check" onChange={(e) => handleCheck(e.target.checked)}/>
                </Form.Group>
            </Form>
    </div>
  )
}

export default SearchBar;