import React from 'react';




 const ProductRow = props => {



 console.log(props)
  

    return (
      <>
        <tr>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
        </tr>
        
        
      </>
    );
  

  }
  

export default ProductRow;