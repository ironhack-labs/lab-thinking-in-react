import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Searchbar() {

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Search</Form.Label>
                <Form.Control type="text" />
                <Form.Control type="checkbox" />
                <Form.Label>Only show products in stock</Form.Label>
            </Form.Group>
        </Form>
    )
}

export default Searchbar