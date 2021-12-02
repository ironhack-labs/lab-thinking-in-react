import React from "react";
import './ProductRow.css'

const ProductRow = (props) => {

    const { productsState } = props
    
    return(
        <div>
            {productsState.filteredProducts.map((product, index) => {
                const divStyle     = product.stocked ? {color: 'black'} : {color: 'red'}
                return(
                    <div className="flex-products" key={index + Date.now()}>
                        <p style={divStyle}>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                )
            })}
        </div>
      
        
    )
}

export default ProductRow