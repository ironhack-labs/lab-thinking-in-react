import React, { Component } from 'react'
import ProductRow from './ProductRow'
import '../App.css'

export default class ProductTable extends Component {
    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.products.map((product)=>{
                        return (
                            <ProductRow
                            key={product.id}
                            {...product}/>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}
