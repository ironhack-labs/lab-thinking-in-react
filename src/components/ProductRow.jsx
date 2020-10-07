import React from 'react';


const ProductRow = ({name, price, stocked}) => {
    
  return (
   
    <tr>
        {stocked && <td>{name}</td> }
        {!stocked && <td style={{color: "red"}}>{name}</td> }
        {/* <td style={{color: stocked ? "red": "black"}}>{name}</td> OTHER WAY TO DO IT*/}
      
      <td>{price}</td>
    </tr>
  );
};
export default ProductRow;
