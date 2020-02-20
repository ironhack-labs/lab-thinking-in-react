import React from 'react'
import ProductRow from './ProductRow.jsx';

export default function ProductTable({articles}) {
    return (
        <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {
                articles.map((a, i) => (
                    <ProductRow key={i} article={a} />
                ))
            }
            </tbody>
        </table>
    </div>
    )
}

