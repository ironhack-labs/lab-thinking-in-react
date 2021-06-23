import React from 'react';




const ProductRow = ({name,price,stocked})=>{
    return (
        
        <div className="rowElements">
            <span>{name}</span>
            <span>{price}</span>

        </div>
    )
}

export default ProductRow;