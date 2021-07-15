import { Component } from "react"
import React from "react"
import { data } from '../data.json'
import ProductRow from "./ProductRow"

class ProductTable extends Component {

    constructor() {
        super()
        this.state = {
            data

        }
    }



    render() {



        return (
            <>
                <table style={{ width: '50%' }}>
                    <tbody>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>

                        </tr>
                        {this.state.data.map((elm, index) => <ProductRow key={index} {...elm}></ProductRow>)}

                    </tbody>
                </table>
            </>
        )
    }
}

export default ProductTable