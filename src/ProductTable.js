import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable(props) {
    const filtered = props.products.filter(product => {
        return product.name.toLowerCase().includes(props.query.toLowerCase())
            && (props.stock === true ? product.stocked === true : true)

    })
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <table>
                <thead>
                    <tr>
                        <th style={{ width: '300px' }}>Name</th>
                        <th style={{ width: '300px' }}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductRow products={filtered} />
                </tbody>
            </table>
        </div>
    )
}