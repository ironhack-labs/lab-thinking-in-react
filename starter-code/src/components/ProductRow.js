import React from 'react';

const ProductRow = ({name, price}) => {
  return (
    <tr className="contact-items">

        <th>{name}</th>
        <th>{price}</th> 

    </tr>
  )
}


export default ProductRow