import React from 'react'
import { Form } from 'react-bootstrap'

const SearchBar = props => {
    
    const handleChangeSearch = (e) => {
        const { name, value, checked } = e.target
        name === "search" ? props.search(value) : props.updateCheckBox(checked)
    }

    return (
        <div>
            <h3 style={{textAlign:"center"}}>Search</h3>
            <Form>
                <Form.Group>
                    <Form.Control name="search" type="text" value={props.searchInState} onChange={handleChangeSearch} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="showStock">Only show products on stock</Form.Label>
                    <Form.Control type="checkbox" name="showStock" checked={props.showOnlyOnStock} onChange={handleChangeSearch} />
                </Form.Group>
            </Form>
            
        </div>
    )
}

export default SearchBar
