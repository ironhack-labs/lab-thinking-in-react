import React from 'react';
import store from '../../data.json'

const Product = ({name, price}) =>  {
    
    return (
    <>
        <tr>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    </>
    )

}

export default Product