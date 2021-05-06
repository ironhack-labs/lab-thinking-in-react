import React, { Component } from 'react'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {
    render() {
        
        const filteredProducts = this.props.products.filter(product => {
            return product.name.toLowerCase().includes(this.props.searchQuery.toLowerCase())
                && (this.props.onlyInStock && product.stocked || !this.props.onlyInStock)
        })

        const mappedProducts = filteredProducts.map(product => (
            <ProductRow product={product}  key={product.id}/>
        ))

        
        return (

            <table class="table container">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                    </tr>                
                </thead>
                <tbody>
                    {mappedProducts}
                </tbody>
            </table>
        )
    }
}
