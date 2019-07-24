import React from 'react';

import ProductRow from './ProductRow';

function ProductTable(props) {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </tbody>
            <tbody>
                {
                    props.products.map((product, index) => <ProductRow key={index} {...product} />)
                }
            </tbody>
        </table>
    )
}

export default ProductTable;