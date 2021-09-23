import React from 'react'
import { Form } from 'react-bootstrap'

export default function SearchBar(props) {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" name="searchValue" value={props.value} onChange={props.handleChange} placeholder="Buscar" />
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check name="isStock" type="checkbox" label="Only show products in stock" onChange={props.handleChange} />
                </Form.Group>
            </Form.Group>
        </Form>
        // <div>
        //     <p>Search</p>
        //     <input name="searchValue" value={props.value} onChange={props.handleChange}></input>
        // </div>
    )
}
