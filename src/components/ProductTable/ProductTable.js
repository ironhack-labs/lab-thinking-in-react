import React from 'react';
import ProductRow from '../ProductRow/ProductRow';

function ProductTable ({products}) {
    return (
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product) =>           
            <ProductRow key={product.id} {...product}/>
            )}
        </tbody>
        </table>
    )
}

export default ProductTable