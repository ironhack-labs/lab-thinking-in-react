import React from 'react'
import ProductRow from './ProductRow';

const ProductTable = props => {

    const productsList = props.products.map(prod => {
        return (
            <ProductRow key={prod.name} product={prod}></ProductRow>
        )
    })

    return (
        <table className="table">
            <tbody>
                {productsList}
            </tbody>
        </table>
    )
}

export default ProductTable