import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = ({ data }) => {
    
    return (
       
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {data.map(elm => { return <ProductRow key={elm.id} {...elm} />})}
            </tbody>
        </table>
    )

}

export default ProductTable