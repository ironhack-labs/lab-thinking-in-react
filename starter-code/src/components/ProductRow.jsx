import React from 'react'


const ProductRow = ({category,price,stocked,name}) =>{
    console.log(category,price,stocked,name)
    return(
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>Hola</td>   
        </tr>
    )
}

export default ProductRow;