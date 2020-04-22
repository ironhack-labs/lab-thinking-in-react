import React from 'react';
import '../App.css';

const ProductRow = (props) => {
  const { product } = props;
  const { name, price, stocked } = product;
  const divStyle = {
    color: stocked ? 'default': 'red'
  };
  return (
    <div className='product-row'>
      <div className='product-name' style={divStyle}>{name}</div>
      <div className='product-price'>{price}</div>
    </div>
  );
}

export default ProductRow;
