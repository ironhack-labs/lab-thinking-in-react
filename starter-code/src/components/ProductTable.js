import React from 'react'
import ProductCatRow from './ProductCatRow';
import ProductRow from './ProductRow';

const ProductTable = ({name, price, category, stocked, drawC}) =>{

    return(
        <div>
                
            { drawC && <ProductCatRow category={category} />}
        
            <ProductRow name={name} price={price} stocked={stocked} />
                
        </div>
    )
}

export default ProductTable