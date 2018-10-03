import React from 'react';


const ProductRow = ({name, price, style}) => {

    return (
      <div style={style}>
        <td>{name}</td>
        <td>{price}</td>
        </div>
    )}
        

export default ProductRow;

