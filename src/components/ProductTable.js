import React from 'react'
import ProductsRow from './ProductRow'

export default function ProductTable({search}) {
    console.log('search products table:', search)

    return (
        <div className='border'>
            <div className='py-3 mx-4 d-flex justify-content-around'>
                <h3>Name</h3>
                <h3>Price</h3>
            </div>

            <ProductsRow search={search}/>
        </div>
    )
}
