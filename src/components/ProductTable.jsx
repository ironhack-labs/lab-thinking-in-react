import { useState } from 'react';
import ProductRow from './ProductRow.jsx';


function ProductTable({products, search}) {
    console.log(products);
    return (<>
        <h1>products</h1>

        {products
            .filter((oneProduct) => {
                if (oneProduct.name.toLowerCase().includes(search.toLowerCase())
                ) { return true; }
            })
            .map((product) => {
                return <ProductRow key={product.id} product={product} />
            })}
            

        

    
    </>

    )
}

export default ProductTable;