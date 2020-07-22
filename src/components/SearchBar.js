import React from 'react'
import {Form, FormGroup, FormControl, InputGroup } from 'react-bootstrap'


function SearchBar(props) {
    return (
        <div>
            <Form>
                <FormGroup className='field'>
                    <Form.Label htmlFor="name">Search: </Form.Label>
                    <FormControl className='control' type="text" name="name" onChange={props.onChange}/>
                </FormGroup>
            </Form>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Only show Products in Stock" onClick={props.onClick}/><span>Only show Products in stock</span>
                </InputGroup.Prepend>
            </InputGroup>
        </div>
    )
}

export default SearchBar
