import React, { Component } from 'react'
import { Container, Table } from 'react-bootstrap'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: this.props.products,
        }
    }

    render() {
        return (
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map((elm, idx) => {
                            return <ProductRow key={idx} name={elm.name} price={elm.price} />
                        })
                        }
                    </tbody>
                </Table>

            </Container>
        )
    }
}
