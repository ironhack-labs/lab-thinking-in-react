import React from "react";
import ProductRow from './ProductRow';

const ProductTable = ( props ) => {
  console.log(props)
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
      {
        props.productsData.map((element, index) => {
         return <ProductRow key= {index} product = { element } > </ProductRow>
        }) 
      }
      </tbody>

    </table>
  );
};

export default ProductTable;