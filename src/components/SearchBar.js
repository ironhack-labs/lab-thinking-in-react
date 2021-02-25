import React from 'react';
import { Component } from 'react'
import { Form } from 'react-bootstrap';

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            stocked: false
        }
    }

    handleInputChange(e) {
        this.setState({name: e.target.value}, () => this.props.searchProduct(this.state)) 
        
    }

    handleCheckboxChange(e) {
        this.setState({stocked: e.target.checked}, () => this.props.checked(this.state))
    }

    render() {
        return(
            <>
                <Form.Group>
                    <Form.Control type="text" value={this.state.name} name="name" onChange={(e) => this.handleInputChange(e)} />
                </Form.Group>
                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Products in Stock" name="stocked" value={this.state.stocked} onChange={(e) => this.handleCheckboxChange(e)} />
                </Form.Group>
            </>
        )
    }
}

export default SearchBar