import React from "react";

const ProductRow = ({products, filtered}) => {
  console.log('products: ', products)
  const data = products.data;
  console.log('filtered desde ProductRow: ', filtered)
  return (
    <tbody>
      {data.map((item, index) => 
      <tr key={index}>
        <td style={{color: item.stocked ? "black" : "red"}}>{item.name}</td>
        <td style={{color: item.stocked ? "black" : "red"}}>{item.price}</td>
      </tr>)}
    </tbody>
  );
};

export default ProductRow;
