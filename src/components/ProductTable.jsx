import { useState } from "react";
import jsonData from "../data.json";
import ProductRow from "./ProductRow";

function ProductTable({ products, searchTerm }) {
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    );
  }
  
  export default ProductTable;