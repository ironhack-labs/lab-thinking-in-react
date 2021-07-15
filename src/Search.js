import { Component } from "react"
import React from 'react';
import products from './data.json'
import ProductCard from './ProductCard'
import { Form, Button, Input } from 'react-bootstrap';

class Search extends Component {

    constructor() {
        super()
        this.state = {
            name: ""
        }
    }


    handleInputChange = e => {

        // console.log(e.target.value)
        // const name = e.target.name
        //  const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        this.setState({
            name: e.target.value                   // computed property names
        })

        this.props.searchProduct(this.state.name)

    }

    // handleFormSubmit = e => {

    //     e.preventDefault()
    //     // alert(this.state.name)
    //     this.props.searchProduct(this.state.name)

    //     this.setState({
    //         name: ''
    //     })
    // }


    render() {

        return (
            <>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group className="mb-3" name="search" controlId="formBasicEmail" >

                        <Form.Control type="text" name="search" placeholder="search..." onChange={this.handleInputChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>


                </Form>
            </>
        )
    }
}

export default Search