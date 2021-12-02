import React from "react";
import ProductRow from "../ProductRow/ProductRow";
import './ProductTable.css'

const ProductTable = (props) => {

    const { productsState } = props
    
    return(
        <div>
            <div className="flex-titles">
                <h3>Name</h3>
                <h3>Price</h3>
            </div>
                <ProductRow 
                productsState={ productsState } />
        </div>
        
    )
}

export default ProductTable