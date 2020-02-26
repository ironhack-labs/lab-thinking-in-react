import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {

    render() {
        return(
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <ProductRow />
            </table>
        )
    }
}

export default ProductTable;