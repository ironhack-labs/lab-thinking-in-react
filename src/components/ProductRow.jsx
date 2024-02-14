import { useState } from "react";
import jsonData from "../data.json";

function ProductRow() {

    const [products, setProducts] = useState(jsonData);
 

    return (
      <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} style={{color: product.inStock ? 'black' : 'red'}} >
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
      </div>
    );
  }
  
  export default ProductRow;    