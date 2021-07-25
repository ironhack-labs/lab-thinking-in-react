import React from 'react';
import ProductRow from './ProductsRows';

function ProductTable(){
    retrun (
        <div>
            <div className="product-row-container">
                <h4> Name </h4>
                <h4> Price </h4>
            </div>
            {products.map((product, index) =>{
                return <ProductRow key={index} product={product}/>
            }) }
            </div>
    )
}

export default ProductTable