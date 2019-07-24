import React from 'react';
import '../../App.css';

function ProductRow(props) {

    return (
    
     <tr className="bodyOfTable">
       <td className={!props.theProduct.stocked ? "redtext" : undefined}>{props.theProduct.name}</td>
       <td>{props.theProduct.price}</td>
     </tr>
    
    );
  }


export default ProductRow;
