import React from 'react';
import ProductRow from './ProductRow.js';

export default function ProductTable(props) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td><strong>Name</strong></td>
                        <td><strong>Price</strong></td>
                    </tr>
                </thead>
                <tbody>
                    <ProductRow 
                        products={ props.products }
                        query = { props.query}
                        stocked = { props.stocked }
                    />
                </tbody>
            </table>
        </>
    )
}
