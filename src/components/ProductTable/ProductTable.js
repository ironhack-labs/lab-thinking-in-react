import ProductRow from "../ProductRow/ProductRow";
import React from 'react';


function ProductTable(props) {
    return (
      <div className="ProductTable">
      <h3>Product Table</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {props.products.map((product, index) => (
            <ProductRow product={product} key={index} />
        ))}

        </tbody>
      </table>
    </div>
  );
};
  
  export default ProductTable;
  