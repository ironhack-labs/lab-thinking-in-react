import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable({products}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {products.length ?
                (products.map((product, i) => (
                    <ProductRow
                        product={product}
                        i={i}
                        key={i}
                    />
                ))) : (
                    <tr>0 products</tr>
                )
            }
            </tbody>
        </table>
    )
}
