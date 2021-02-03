import React, { Component } from 'react'
import ProductRow from './ProductRow';

class ProductTable extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    </tr>
                    {this.props.products.map(product => {
                        return <ProductRow key={product.id} name={product.name} price={product.price} stocked={product.stocked} />
                    })}
                </table>
            </div>
        )
    }
}

export default ProductTable;
