import React, { Component } from 'react';
import ProductRow from './ProductRow';
import './ProductTable.css'

class ProductTable extends Component {
    render() {
        const { products } = this.props;

        return (
            <div>
                <table cellSpacing='0'>
                    <thead>
                        <tr>
                            <th className='ProductTable-th'>Name</th>
                            <th className='ProductTable-th'>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <ProductRow key={index} name={product.name} price={product.price} stocked={product.stocked}/>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable;