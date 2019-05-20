import React from "react";
import ProductRow from "./ProductRow";

const ProductTable = ({products, filtered}) => {
  return(
  <div>
    <table className="uk-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <ProductRow products={products} filtered={filtered}/>
    </table>
  </div>
  )};

export default ProductTable;
