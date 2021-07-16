import React from 'react'
import ProductRow from './ProductRow';


export default function ProductTable(props) {

    const filtered = props.products.filter(product => {
        return product.name.toLowerCase().includes(props.query.toLowerCase())
    })

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
                    {filtered.map(product => {
                        return (
                            <ProductRow
                                id={product.id}
                                name={product.name}
                                price={product.price}
                            />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
