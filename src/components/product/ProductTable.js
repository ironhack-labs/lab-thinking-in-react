import React from 'react'
import ProductRow from "./ProductRow";

function ProductTable ({ products } ) {
    
    return(
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Disponibility</th>
                </tr>
            </thead>
            <tbody>
    
            {products.map(product => (
               <ProductRow product= {product} />
            ))}   
        </tbody>         
        </table>
    )
}

export default ProductTable