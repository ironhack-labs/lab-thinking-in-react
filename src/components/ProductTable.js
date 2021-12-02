import React from 'react'
import ProductRow from './ProductRow'

function ProductTable(props) {

    return (
        <div>
            <div>
                <span>Name</span>
                <span>Price</span>
            </div>
            <ProductRow products={props.products}></ProductRow>
        </div>
    )
}

export default ProductTable
