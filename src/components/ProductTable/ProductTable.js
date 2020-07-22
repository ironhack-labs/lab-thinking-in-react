import React from 'react'
import ProductRow from "../ProductRow/ProductRow"
import data from "../../data.json"
import "./ProductTable.css"

function ProductTable({searchParam}) {
    
    return (
        <div>
        <table className="tabla">
  <tr className="columnContainer">
    <th className="column">Name</th>
    <th className="column">Price</th>
  </tr>
  <tr className="columnContainer">
      <ProductRow  products={ data }  searchParam={searchParam}/>  
  </tr>


</table>
            
        </div>
    )
}

export default ProductTable
