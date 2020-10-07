import React from 'react';

const ProductRow = ({product}) => {
    

    return (
        <tr className="product-row">
            <td style={ !product.stocked ? { color:  'red' } : { color: 'black'} }>
                

            {product.name}</td>

            <td>{product.price}</td>
        </tr>
    );
}

export default ProductRow;
