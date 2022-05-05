import { useState, useEffect } from 'react'
import productData from '../../data.json'
import './productRow.css'


function ProductRow({ product }) {

    return (
        <div className='table'>
            <p className={product.inStock === true ? 'black' : 'red'}>{product.name}</p>
            <p>{product.price}</p>
        </div>
    )
}

export default ProductRow