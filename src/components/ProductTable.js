import React from 'react'
import data from '../data.json'
import ProductRow from './products/ProductRow'

function ProductTable({ products }) {

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <ProductRow key={product.name} product={product} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable