import React, { Component } from 'react'
import ProductRow from './ProductRow '


export default class ProductTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: this.props.products,
            id: '',
            category: '',
            price: '',
            name: '',
            stocked: false


        }
    }



    render() {

        return (
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.products.map(eachProducts => {
                        return <ProductRow product={eachProducts} />
                    })
                    }
                </tbody>
            </table>
        )
    }
}
