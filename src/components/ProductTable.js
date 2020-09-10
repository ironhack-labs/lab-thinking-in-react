import React from 'react';

import ProductRow from './ProductRow'


function ProductTable (props) {
    return(
        <div>
            <table>
                <tr>
                   <th>Name</th> 
                   <th>Price</th> 
                </tr>
                {props.displayData.map(product => <ProductRow key={product.name} name={product.name} price={product.price} stock={product.stocked}/>)}
            </table>
        </div>
    )
}


export default ProductTable