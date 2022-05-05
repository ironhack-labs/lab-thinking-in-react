//import { useState } from 'react';
import ProductRow from "./ProductRow"

function ProductTable( props ) {
    
    return (
        <table>     
            <tr className='table-row'>
                <th>Name</th>
                <th>Price</th>
            </tr>
            {props.products
                .filter(product => {
                    return product.name.includes(props.search)
            }
            )
                .map(product => {
                    return (
                        <tr key={product.id}>
                            <ProductRow product = {product} />
                        </tr>
                )}
            )}
        </table>
    )
}

export default ProductTable