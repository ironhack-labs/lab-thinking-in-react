import React from 'react'

const FindDisplay = ({category,name,price})=>{
  return(
    <div>
      <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
    </div>
  )
}

export default FindDisplay