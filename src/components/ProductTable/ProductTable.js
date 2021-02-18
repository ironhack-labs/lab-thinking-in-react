import React from 'react';
import './ProductTable.css';
import ProductRow from '../ProductRow/ProductRow'

function ProductTable(props) {
    let products = props.products;
    return (
        <div className="productTable">
            <h2>Product Table</h2>
            <ProductRow products={products}/>
        </div>
    )
}

export default ProductTable;
