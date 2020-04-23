import React, { Component } from 'react';
import ProductRow from './ProductRow'

class ProductTable extends Component {
    render() {
        const searchTerm = this.props.searchTerm;
        const rows = []

        this.props.products.forEach(product => {
            if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                rows.push(
                    <ProductRow
                        name={product.name}
                        price={product.price}
                        stock={product.stocked ? null : "outOfStock"}
                        key={product.name}
                    />
                );
            }
        });

        return(
            <table>
                <thead>
                     <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    { rows }
                </tbody>
            </table>
        )
    }
}

export default ProductTable;