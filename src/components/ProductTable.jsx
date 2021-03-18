import React, { Component } from 'react';
import ProductRow from './ProductRow';

export class ProductTable extends Component {
    render() {
        const {products, searchValue} = this.props;
        const lowerSearchValue = searchValue.toLowerCase();

        const filteredProducts = products.filter(({name}) => 
            name.toLowerCase().startsWith(lowerSearchValue))

        return (
            <div>
                <table>
                <thead>
                    <tr>
                        <th colSpan="1">Name</th>
                        <th colSpan="1">Price</th>
                    </tr>
                </thead>
                <tbody>
                {filteredProducts.map(product => {
                    return <ProductRow key={product.id} product={product}/>
                })}
                </tbody>
                
                </table>
            </div>
        )
    }
}

export default ProductTable
