import React from 'react'

const ProductRow = ({name, price, stocked}) =>{

    return(
        <div>
            <tr>
                <td style={stocked ? {color:'black'} : {color:'red'}}>{name}</td>
                <td>{price}</td>
            </tr>
        </div>
    )
}

export default ProductRow