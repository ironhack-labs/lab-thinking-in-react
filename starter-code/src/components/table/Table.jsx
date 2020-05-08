import React, { Component } from 'react'
import ProductRow from '../productRow/ProductRow'

export default class ProductTable extends Component{
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.products.map((product, idx) =>{
                        return <ProductRow key={idx} product={product} />
                    })}
                </tbody>
            </table>
        )
    }
}
