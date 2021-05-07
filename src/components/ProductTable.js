import React from 'react'

import ProductRow from './ProductRow';

export default function ProductTable(props) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map(product => {
                        return (
                            <ProductRow
                                key={product.id}
                                product={product}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}