import React, { Component } from 'react'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {
    render() {
        const productRows = this.props.products.map(product => {
            return (
                <ProductRow product={product}/>)
        })
        console.log(this.props.products)
        return (
            <>
            <h3>Product Table 📋 </h3>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {productRows}
                </tbody>
            </table>
            
            
            </>
            

        )
    }
}