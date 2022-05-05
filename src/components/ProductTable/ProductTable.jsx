import { useState } from 'react';
import jsonData from '../../data.json';
import ProductRow from '../ProductRow/ProductRow';

function ProductTable({products, searchInput}) {



    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {products?.map(product => {
                    return(
                        <ProductRow product ={product} />
                    )
                })}
            </table>
        </div>
    )
}

export default ProductTable