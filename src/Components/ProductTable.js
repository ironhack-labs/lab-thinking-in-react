import React from 'react'
import ProductRow from './ProductRow'


export default function ProductTable(props) {
    const filteredProducts = props.products.data.filter(p => p.name.toLowerCase().includes(props.query.toLowerCase()));
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
                <ProductRow products={ filteredProducts } />
        </table>
    )
}      