import React, { Component } from 'react'
import ProductRow from './ProductRow'

export class ProductTable extends Component {
    state= {products: this.props.products}
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
             {this.state.products.map((p, i) => <ProductRow key={i} name={p.name} price={p.price} stocked={p.stocked}/>)}
             </tbody>
            </table>
        )
    }
}

export default ProductTable
