import React from 'react'
import ProductRow from '../ProductRow/ProductRow'
import './ProductTable.css'

const ProductTable = ({data}) => {

    console.log('dataaaa', data)
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>

            {data.map((elm, idx) => <ProductRow key={idx} {...elm} />)}

        </table>
    )
}

export default ProductTable