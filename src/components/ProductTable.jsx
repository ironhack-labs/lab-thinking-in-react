import { useState } from 'react';
import ProductRow from './ProductRow.jsx';


function ProductTable({products, search}) {
    console.log(products);
    return (<>
        <h1>products</h1>

        {products
            .map((product) => {
                return <ProductRow key={product.id} product={product} />
            })}
            

        

    
    </>

    )
}

export default ProductTable;