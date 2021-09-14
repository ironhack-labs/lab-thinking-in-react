import React from 'react';
import './ProductTable.css'
import './ProductRow/ProductRow'
import ProductRow from './ProductRow/ProductRow';

const ProductTable = ({products}) => {
return (
   <div className="allProduct">
    <div className='productTable'>
        <h3>Name</h3> <h3>Price</h3>
        
        </div>


        {products.map((product) => {
            return (
                <ProductRow key={product.id} products={product} />
            )
        })}

        </div>
   
)
}

export default ProductTable;
