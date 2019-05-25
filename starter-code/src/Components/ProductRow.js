import React from 'react'

const ProductRow = ({name, price, stocked}) => {

    return (
       <tr className="product">
           <td className={!stocked ? "red" : ""}>{name}</td>
           <td>{price}</td>
       </tr>
   )
}

export default ProductRow