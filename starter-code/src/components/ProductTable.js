import React, { Component } from 'react'
import data from '../data.json'
import ProductRow from './ProductRow'




class ProductTable extends Component {
    constructor() {
        super()
        // this.state = {

        //     data: data.data, 
        // }
    }

    render() {
        // console.log(this.props.data)
		return (
        <>
        <br></br>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>                
                    { this.props.data.map((elm,idx) => <ProductRow {...elm} key={idx}/>) }
            </tbody>
        </table>
        </>
        )

        }
} 

export default ProductTable


