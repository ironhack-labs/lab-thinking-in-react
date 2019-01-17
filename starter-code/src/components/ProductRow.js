import React from 'react';
import { Li } from './StyledList';


const ProductRow = ({product}) => {
  return(
    <Li>
      <span className="pName">{product.name}</span>
      <span className="pPrice"> {product.price}</span>
      <span className="pPrice"> {product.category}</span>
    </Li>
  )
};

export default ProductRow;