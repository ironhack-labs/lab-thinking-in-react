import React from "react"

function ProductRow(props) {

  return <div>
    {props.name} : {props.price}
  </div>
}


export default ProductRow