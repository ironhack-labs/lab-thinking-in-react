import React from "react";
import ProductRow from "./ProductRow";

function ProductTable({ filter,products,onStockCheck}) {
  console.log(products);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      {
        products.filter((eachProduct) => {
          if(eachProduct.name.toLowerCase().includes(filter.toLowerCase())){
            return eachProduct
          }
        }).filter((eachProduct) => {
          if (onStockCheck === true && eachProduct.inStock === true){
            return eachProduct
          } else if (onStockCheck === false){
            return eachProduct
          }
        })
        .map((eachProduct) => {
          return( <ProductRow {...eachProduct} />);
        })
      }
    </table>
  );
}

export default ProductTable;
