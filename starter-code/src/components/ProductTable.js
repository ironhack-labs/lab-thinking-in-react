import React, { Component } from 'react';
import ProductRow from './ProductRow'

class ProductTable extends Component {
    render() {
        const searchTerm = this.props.searchTerm;

        return(
            <table>
                <thead>
                     <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    { this.props.products.map((item, i) => (
                        <ProductRow key={i} name={item.name} price={item.price} stock={item.stocked ? null : "outOfStock"} />
                    )) }
                </tbody>
            </table>
        )
    }
}

export default ProductTable;