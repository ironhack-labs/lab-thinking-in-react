import React from 'react'
import './ProductTable.css'
import ProductRow from './ProductRow'

const ProductTable = ({ products }) => {
    return (
        <>
            {products.map(elm => <ProductRow key={elm.id} {...elm}/>)}
        </>
    )
}

export default ProductTable