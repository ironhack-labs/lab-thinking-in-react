import { useState, useEffect } from 'react'
import ProductRow from '../ProductRow/productRow'

import './productTable.css'

function ProductTable({ productData }) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(productData)
    }, [products])

    return (
        <div >
            <div className='table'>
                <p>Name</p>
                <p>Price</p>
            </div>
            <hr />
            {products.map(elem => {
                return <ProductRow product={elem} />
            })}
        </div>
    )
}

export default ProductTable