
import { useState } from 'react';
import jsonData from '../data.json';
import ProductRow from "./ProductRow"

function ProductTable() {
  return (
    <div>
        <table>
            <thead>
                <th>Name</th>
                <th>Price</th>
            </thead>
            {jsonData.map( (product) => {
                return <ProductRow oneProduct={product} />;
            } )}
        </table>
      
    </div>
  )
}

export default ProductTable
