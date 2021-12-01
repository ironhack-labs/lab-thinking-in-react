import React from "react";
import './ProductRow.css'

const ProductRow = (props) => {

    const { products } = props
    

    return(
        <div>
            {products.map((product) => {
                return(
                    <div className="flex-products">
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                )
            })}
        </div>
      
        
    )
}

export default ProductRow