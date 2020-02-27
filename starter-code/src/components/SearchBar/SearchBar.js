import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            field: ""
        }
    }
    searchHandler = e => this.setState({ field: e.target.value }, () => this.props.setFilter(this.state.field))


    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Search</Form.Label>
                    <Form.Control onChange={this.searchHandler} value={this.state.field} type="text" />
                </Form.Group>
                <Form.Group >
                    <Form.Check type="checkbox" label="Only show products on stock" />
                </Form.Group>
            </Form>
        )
    }
}

export default SearchBar
