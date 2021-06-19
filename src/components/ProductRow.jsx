import React from 'react';

const ProductRow = ({name,price,stocked}) => (
    <div className="product">
        <span style={{color: stocked ? 'red' : 'black'}}>{name} </span><span>{price}</span>
    </div>
)

export default ProductRow;