import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = (props) => {

    return (
        <>
            <div className="row thead">
                <div className="col-6"><strong>Name</strong></div>
                <div className="col-6"><strong>Price</strong></div>
            </div>
            <ProductRow products={props.products} querySearch={props.querySearch} isStock={props.isStock} />
        </>
    )
}

export default ProductTable