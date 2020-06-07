import React, { Component } from 'react';
import ProductRow from './ProductRow.js'

class ProductTable extends Component{


    render () {
        return(
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                        {this.props.products.map((prod) => <tr> <ProductRow name={prod.name} price={prod.price}/> </tr>)}
                </table>
            </div>
        )
    }
}

export default ProductTable