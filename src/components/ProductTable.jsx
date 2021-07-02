import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = ({products})=> {

    return(
        <div>
        <div className="productTable">
            <p>Name</p>
            <p>Price</p>
        </div>
            <div>
                
            <ProductRow/>
            </div>
        </div>
    )
}

export default ProductTable;