import React, { Component } from 'react'
import ProductRow from '../components/product-row'


class ProductTable extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {this.props.filterProducts.map((elm, idx) => {
                        return <ProductRow name={elm.name} price={elm.price} key={idx} />
                    })}
                </tbody>
            </table>
        )
    }
}
export default ProductTable