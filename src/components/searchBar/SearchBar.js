import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'

export default class SearchBar extends Component {

    constructor() {
        super()
        this.state = {
            text: ''
        }
    }

    handleInput = e => {
        
        let { name, value } = e.target

        this.setState({ [name]: value })

        this.props.searchProduct(this.state.text)

    }

    render() {
        return (

            <Form>
                <Form.Group >
                    <Form.Label>Search</Form.Label>
                    <Form.Control name='text' value={this.state.product} onChange={this.handleInput} type="text" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Only show products on stock" />
                </Form.Group>
            </Form>
        )
    }

}