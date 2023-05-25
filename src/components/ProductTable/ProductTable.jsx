import ProductRow from '../ProductRow/ProductRow'
import './ProductTable.css'
import { useState, useEffect } from 'react'

export default function ProductTable({ productsJson }) {

    const [products, setProducts] = useState(productsJson)

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                    <tr>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        return (
                            <ProductRow key={product.id} {...product} ></ProductRow>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
