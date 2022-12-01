import { Button, Form } from 'react-bootstrap'

const SearchBar = () => {

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Search</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Only show products in stock" />
            </Form.Group>
        </Form>
    )
}

export default SearchBar

// value = { name } onChange = { handleInputChange } name = 'title'