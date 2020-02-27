import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import ProductRow from './ProductRow'

class ProductTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: {
                category: '',
                price: '',
                stocked: true,
                name: ''
            }
        }
    }
    render() {
        console.log(this.props.data)
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((elm, idx) => <ProductRow {...elm} key={idx} />)}


                </tbody>
            </Table >
        )
    }

}


export default ProductTable