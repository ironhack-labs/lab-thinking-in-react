import React from "react"
import ProductRow from "./ProductRow"

function ProductTable(props) {
  return (<div>
    <div className="headings">
    <h2>Name</h2> 
    <h2>Price</h2>
    </div>
    <ul>
    {props.products.map((e,idx) => <li className={e.stocked ? "" : "red"} key={idx}><ProductRow {...e}/></li>)}
    </ul>
  </div>
  )
}


export default ProductTable