import React from 'react';



const productRow = (props) => {
    return(
    <div>
        <td>{props.name}</td>

        <td>{props.price}</td>
    </div>
    )

  }
  
  export default productRow;