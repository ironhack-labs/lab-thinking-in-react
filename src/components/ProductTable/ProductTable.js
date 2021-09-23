import React, { Component } from 'react'
import ProductRow from '../ProductRow/ProductRow'


const ProductTable = (props) => {

    const displayRow = () => {
        return (
            <ProductRow {...props} />
        )
    }

    return (
        <tr>
            {
                displayRow()
            }
        </tr>
    )
}

export default ProductTable
