import React from 'react'
import { Component } from 'react'

import ProductRow  from '../productRow/ProductRow'
import data from '../../data.json'

class ProductTable extends Component {

    constructor() {
        super()
        this.state = {products: data.data}
    }    


    render() {

        return (
            <table>
                <thead><tr><th>Name</th><th>Price</th></tr></thead>
                <tbody>{this.state.products.map(elm => <ProductRow key={elm.id} {...elm}  />)}</tbody>
            </table>
        )
    }
}



export default ProductTable 
