import React from 'react';

export const ProductRow = ({ products }) => {
  
  return (
    <>
      {products.map((elm) => {
        return (
          
            <tr key={elm.id}>
            {elm.inStock?<td className ="colorInStock">{elm.name}</td> : <td className ="colorOutOfStock">{elm.name}</td>}
              
              <td>{elm.price}</td>
            </tr>
          
        );
      })}
    </>
  );
};
