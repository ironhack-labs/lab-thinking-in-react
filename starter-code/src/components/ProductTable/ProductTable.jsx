import React from 'react'
import ProductRow from '../ProductRow/ProductRow'

export default function ProductTable(props) {
console.log(props)
    return (
        <div>
        <ul>
            {props.products.map((product,index) => (

                <ProductRow key={index} product={product} /> 

            ))}
            </ul>
        </div>
    )
}
