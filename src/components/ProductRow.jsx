import React from 'react';
import 'bulma/css/bulma.css';


const ProductRow = ({ name, price, stocked }) => {
    return (
    <tbody>
{ 
    stocked ? 
    (<tr>
        <td>{name}</td>
        <td>{price}</td>
        </tr> 
) : (
    <tr>
        <td style={{color:'red'}}>{name}</td>
        <td>{price}</td>
        </tr> 
)

}
</tbody>   
    )
}

export default ProductRow;

