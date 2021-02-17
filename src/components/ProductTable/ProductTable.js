import React from "react";
import ProductRow from "../ProductRow/ProductRow"

function ProductTable({data}){

  return(
    <div className="margin">
    {
      data.length ? (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {
            data.map((product)=>(
              <ProductRow key={product.id} product={product} />
            ))
          }
        </tbody>
      </table>
      ) : (
        <p>No products available</p>
      )
    }
      
    </div>
    
  )
}

export default ProductTable