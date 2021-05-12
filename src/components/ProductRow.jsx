import React from 'react';
import 'bulma/css/bulma.css';


const ProductRow = ({ name, price }) => {
    return (
       <tr>
        <td>{name}</td>
        <td>{price}</td>
        </tr>    
    )
}

export default ProductRow;

