import React from 'react'

const Row= ({row}) => {

  return (
    <div>
      <td className="cell">{row.name}</td>
      <td className="cell">{row.price}</td>
    </div>

  )
}

export default Row;
