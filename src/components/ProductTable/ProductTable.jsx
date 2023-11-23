import { useState } from "react"
import ProductRow from "../ProductRow/ProductRow"
import './ProductTable.css'

const ProductTable = ({ products }) => {




    return (
        <div className="ProductTable">
            <div className="header">
                <p>Name</p>
                <p>Price</p>
            </div>
            <hr />
            {products.map(e => <ProductRow {...e} />)}
        </div>
    )
}

export default ProductTable