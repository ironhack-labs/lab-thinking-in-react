import React from "react"
import "./ProductRow.css"

const ProductRow = props => {
   const stockedClass = props.stocked ? "in-stock" : "out-stock"
    return (
        <div className={`row justify-content-between ${stockedClass}`}>
        <div>{props.name}</div>
        <div>{props.price}</div>
      </div>
    );

}

export default ProductRow