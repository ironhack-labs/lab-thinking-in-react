import { useState } from "react";



function ProductTable(probs) {
       
    return (
        <div class="Table">
           <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
              <tr>
                <td>{probs.dataImport.name}</td>
                <td>{probs.dataImport.price}</td>
              </tr>
        </tbody>
      </table>
      </div>
    );
  }
  
  export default ProductTable;