import React from 'react'
import { Form } from 'react-bootstrap'

const SearchBar = props => {
    
    const handleChange = (e) => {
        const { name, value, checked } = e.target
        name === "search" ? props.search(value) : props.updateCheckBox(checked)
    }

    return (
        <div>
        <br />
            <h5 style={{textAlign:"center"}}>Search</h5>
            <Form>
                <Form.Group class="input-group">
                    <Form.Control name="search" type="search"  placeholder="Search" class="form-control rounded" value={props.searchInState} onChange={handleChange} />
                </Form.Group>
                <br />
                <Form.Group class="form-check">
                    <Form.Label htmlFor="showStock"> Only show products on stock </Form.Label>
                    <Form.Control className='form-check-input' type="checkbox" id="flexSwitchCheckChecked" name="showStock" checked={props.showOnlyOnStock} onChange={handleChange} />
                </Form.Group>
                <br />
            </Form>
            
        </div>
    )
}

export default SearchBar