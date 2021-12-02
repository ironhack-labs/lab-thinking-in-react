import React from "react";
import ProductRow from "../ProductRow/ProductRow";
import './ProductTable.css'

const ProductTable = (props) => {

    const { productsState, searchWriteBar } = props
    
    return(
        <div>
            <div className="flex-titles">
                <h3>Name</h3>
                <h3>Price</h3>
            </div>
                <ProductRow 
                searchWriteBar={searchWriteBar}
                productsState={ productsState } />
        </div>
        
    )
}

export default ProductTable