import React, { Component } from 'react'
import ProductRow from './ProductRow'

export class ProductTable extends Component {
    render() {
        return (
            <div className="table">
            <table>
    <thead>
        <tr>
            <th>NAME</th>
            <th>PRICE</th>
        </tr>
    </thead>
    <tbody>
    {this.props.products.map((product, index) => (<ProductRow product={product} key={index}/>))}
    
    
    </tbody>
</table>

            
                
            </div>
        )
    }
}

export default ProductTable
