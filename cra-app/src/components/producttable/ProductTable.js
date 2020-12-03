import React, { Component } from 'react'
import data from '../../data.json'
import ProductRow from '../productrow/ProductRow'

class ProductTable extends Component {

    constructor() {
        super()
        this.state = {
            products: data,
            color: "black"
        }
    }
    onChange = () => {
        console.log(this.state.products.data.stocked)
        if (this.state.products.data.stocked === "true") {
            return this.state.color = "black"
        } else {
            return this.setState.color = "red"
        }

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

                    {this.state.products.data.map(elm => {

                        return (
                            <ProductRow key={elm.id}{...elm} changeColor={this.onChange} />
                        )
                    })
                    }

                </tbody >
            </table >

        )
    }
}

export default ProductTable