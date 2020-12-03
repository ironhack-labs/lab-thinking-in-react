import React, { Component } from 'react'
import ProductRow from './ProductRow/ProductRow'

class ProductTable extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        this.setState({ products: this.props.products.data })
    }

    render() {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map(elm => <ProductRow key={elm.id} {...elm} />)}
                    </tbody>
                </table>
            </>

        )
    }
}

export default ProductTable
