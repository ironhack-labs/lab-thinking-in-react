import React from 'react';

 const ProductRow = ({ name, price, inStock }) => {
    return (
        <div>
          <span style={inStock ? { color: 'black' } : { color: 'red' }}>
        {name}
      </span>

      <span>{price}</span>
        </div>
    )
 }

 export default ProductRow