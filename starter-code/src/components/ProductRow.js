import React from 'react'

const ProductRow = ({name, category,price,stocked,i}) => {
  return(
    <tr key={i}>
      <td colSpan= '2' className={
        !stocked
          ? 'text-danger'
          : null  
      }>{name}</td>
      <td colSpan= '2'>{price}</td>
    </tr>
  )

}

export default ProductRow