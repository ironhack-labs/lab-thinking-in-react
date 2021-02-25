import React from 'react'

import { Component } from 'react'

import { Form } from 'react-bootstrap'

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            product: '',
            hasStockCheck: false
        }
    }

    handleInputChange(e) {
        this.setState({ product: e.target.value }, () => this.props.searchProduct(this.state))
    }

    handleCheckboxChange() {
        console.log(this.state.hasStockCheck)
        this.setState({ hasStockCheck: !this.state.hasStockCheck }, () => this.props.searchProduct(this.state))
    }

    render() {
        return (
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label >Search</Form.Label>
                    <Form.Control type="text" placeholder="type a product here" value={this.state.product} onChange={e => this.handleInputChange(e)} />
                </Form.Group>
                <Form.Check type='checkbox' label='Only show products in stock' onChange={() => this.handleCheckboxChange()} />
            </Form>
        )
    }
}

export default SearchBar