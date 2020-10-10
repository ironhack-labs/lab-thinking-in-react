import React from 'react';


const ProductRow = ({name, price, stocked}) => {
  
    
  return (
   
    <tr>
        {/* {stocked && <td>{name}</td> }
        {!stocked && <td style={{color: "red"}}>{name}</td> } */}
        <td style={{color: stocked ?"black" : "red"}}>{name}</td> 
      
      <td>{price}</td>
    </tr>
  );
};
export default ProductRow;
