import React from 'react'
import ProductRow from '../components/ProductRow'

function ProductTable({ products }) {
    return products.map((product) => {
        return <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            <tbody>
                <ProductRow product={product} id={product.id}/>
            </tbody>
        </table>
    })
}

export default ProductTable