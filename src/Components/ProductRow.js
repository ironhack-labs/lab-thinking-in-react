import React from 'react';

export const ProductRow = ({producto}) => {
  return (
    <>
      <tr style={!producto.stocked?{color:'red'}:null}>
              <th scope="col">{ producto.name}</th>
              <th scope="col">{ producto.price}</th>
      </tr>
    </>
  );
}; 