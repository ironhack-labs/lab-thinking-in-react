import React from 'react'

import ProductRow from '../productRow/ProductRow'

const ProductTable = ({data}) => {
        return (

        <table>     
            <thead>
                <tr>
                    <th>Name:</th>
                    <th>Price:</th>
                </tr>
            </thead>   
            <tbody>
                {data.map((elm,index) => <ProductRow key={index} {...elm} /> )}
            </tbody>          
        </table>

    )
}

export default ProductTable