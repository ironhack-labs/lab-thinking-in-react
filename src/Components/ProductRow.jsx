import React from 'react';


const ProductRow = (props) => {
  
  

  return (
    <React.Fragment>
      <tr>
        <td style={{color:props.product.stocked?`inherit`:`red`}}>{props.product.name}</td>
        <td>{props.product.price}</td>
        <td>{props.product.stocked? "stock":"out of stock"}</td>
      </tr>
    </React.Fragment>
  );
};

export default ProductRow;
