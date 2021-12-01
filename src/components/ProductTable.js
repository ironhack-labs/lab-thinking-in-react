import React from 'react';
import ProductRow from './ProductRow';

// import './ProductTable.css'

const ProductTable = (props) => {
    const {products} = props

    return(
        <div className="ProductTable">
            <table>
                <ProductRow products={products}/>
            </table>
        </div>
    )
}

export default ProductTable