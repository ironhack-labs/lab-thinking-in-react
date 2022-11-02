import React from 'react'
import { ProductRow } from '../components/ProductRow';

function ProductTable({ products, filterText }) {

    const rows = [];

    products.forEach((product) => {
        if (
            product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }

        rows.push(
            <ProductRow
                product={product}
                key={product.id} />
        );

    });

    return (
        <>
            <h2>ProductTable</h2>
            <table>
                <tr className='border-bottom'>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                </tr>
                {rows}
            </table>
        </>
    )
}

export default ProductTable;
