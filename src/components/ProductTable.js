import React from "react";
import ProductRow from "./ProductRow";

function ProductTable (props) {    
    return(
     <div className="list">
        <table>
         <tr>
          <th>Name</th>
          <th>Price</th>
         </tr>               
          {props.productList.map(product => {
            return (
              <ProductRow product={product} /> 
            )
          })}
        </table>
    </div>    
    )
  }  
  export default ProductTable;