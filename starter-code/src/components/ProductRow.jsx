import React from 'react';

const ProductRow = ({product}) => {
  return(
    <li className={'productRow ' + (product.stocked ? '' : 'outStock')}>
      <span className="pName">{product.name}</span>
      <span className="pPrice">{product.price}</span>
    </li>
  )
};

export default ProductRow;
