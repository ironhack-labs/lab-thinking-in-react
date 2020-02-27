import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: props.data.data,
            productsCopy: props.data.data,
            search: ''
        }
    }

    handleChanges = e => {
        let startsWithN = this.state.products
        let checked = false
        let value = ''
        if (e.target.type === "checkbox") {
            checked = e.target.checked
            if (checked) {
                startsWithN = startsWithN.filter(elm => elm.stocked === true)
            } else if (!checked) {
                startsWithN = this.state.productsCopy
            }
        } else {
            value = e.target.value
            startsWithN = startsWithN.filter(product => {
                return product.name.toLowerCase().startsWith(value)
            })
        }

        this.setState({
            search: value,
            products: startsWithN
        })
        this.props.updateList(startsWithN)
    }

    render() {
        return (
            <Form>
                <Form.Group controlId="search">
                    <Form.Label>Search</Form.Label>
                    <Form.Control type="text" placeholder="Search" value={this.state.search} onChange={this.handleChanges} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Only show products on stock" onChange={this.handleChanges} />
                </Form.Group>
            </Form >
        )
    }
}


export default SearchBar