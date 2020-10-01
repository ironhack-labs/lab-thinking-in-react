import React from 'react';
import './ProductTable.css'

import ProductRow from './ProductRow'

const ProductTable = props => {

    return (

        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
            </thead>

            <tbody>

                {props.products.map((elm, idx) => <ProductRow key={idx} {...elm} />)}

            </tbody>
        </table>

    )
}

export default ProductTable;