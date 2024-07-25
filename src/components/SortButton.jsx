import React from 'react'

function SortButton(props) {
  return (
    <div>
        <button onClick={props.sortbyName}>Sort By Name</button>
        <button onClick={props.sortbyPrice}>Sort By Price</button>
    </div>

  )
}

export default SortButton