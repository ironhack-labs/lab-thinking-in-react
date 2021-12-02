import React from 'react';

function ProductRow (props) {

  return (
	    
    <table>
        <tr>
            <th>{props.name}</th>
            <th>{props.price}</th>
        </tr>
    </table>
        
   
  );
}

export default ProductRow;