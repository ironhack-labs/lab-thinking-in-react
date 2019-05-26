import React from 'react'

const ProductRow = ({name, category,price,stocked,i}) => {
  return(
    <tr key={i}>
      <td className={
        !stocked
          ? 'text-danger'
          : null  
      }>{name}</td>
      <td>{price}</td>
    </tr>
  )

}

export default ProductRow