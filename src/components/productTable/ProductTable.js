import React, { Component } from 'react'

import Table from 'react-bootstrap/Table'

// Custom Component
import ProductRow from './ProductRow'

export default class ProductTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: this.props.products
        }
    }

    render() {

        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.products.map((product, index) => <tr key={index}><ProductRow {...product} /></tr>)}

                </tbody>
            </Table>
        )

    }

}