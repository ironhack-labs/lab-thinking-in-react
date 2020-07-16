import React, { Component } from 'react'
import ProductRow from '../ProductRow/'

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        
    }

    render() {

        return (

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> Sporting Goods</td>
                    </tr>
                    {this.props.products.filter((elm) => elm.category === 'Sporting Goods')
                        .map((elm, idx) => <ProductRow key={idx} {...elm} />)}
                    <tr>
                        <td> Electronics</td>
                    </tr>
                    {this.props.products.filter((elm) => elm.category === 'Electronics')
                        .map((elm, idx) => <ProductRow key={idx} {...elm} />)}
                </tbody>
            </table>
        )
    }
}

export default Products