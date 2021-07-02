import React from 'react'

const ItemRow = ({name, price}) => {
    return ( 
        <tr>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
     );
}
 
export default ItemRow;