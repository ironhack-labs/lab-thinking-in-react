import React from "react";

const ProductRow = ( {products} ) => (
    <>
        {products.map(product => (
            <tr key={product.id}>
                <td style={{color: !product.inStock && "red"}}>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        ))}
    </>
);

export default ProductRow;