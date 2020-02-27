import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = { search: '' }
    }

    handlerChange = e => {
        this.setState({ search: e.target.value })
        this.props.setSearch(e.target.value)

    }

    handlerSubmit = e => {
        console.log("------- se llama al submit")
        e.preventDefault()
        this.setState({ search: '' })
        console.log(this.state.search)
        this.props.filterProducts(this.state.search)

    }


    render() {

        return (
            <Form onSubmit={this.handlerSubmit}>
                <Form.Group>
                    <Form.Label>Search</Form.Label>
                    <Form.Control name='name' type="text" onChange={this.handlerChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Check type="checkbox" label="Only show products on stock" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        )
    }
}

export default SearchBar