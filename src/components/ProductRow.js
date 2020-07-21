import React from 'react';
import { Badge } from 'react-bootstrap';
//props.searchValue
const ProductRow = (props) => {
  let productsList = '';
  if (props.showStocked) {
    productsList = props.products
      .filter((product) =>
        product.name.toLowerCase().includes(props.searchValue) && product.stocked
      )
      .map((product, index) => { 
        return (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td><Badge variant="secondary">{product.category}</Badge></td>
          </tr>
        );
      });
  } else {
    productsList = props.products
      .filter((product) =>
        product.name.toLowerCase().includes(props.searchValue)
      )
      .map((product, index) => {
        let color = 'text-dark';
        if (!product.stocked) {
          color = 'text-danger';
        }
        return (
          <tr key={index}>
            <td className={color}>{product.name}</td>
            <td>{product.price}</td>
            <td><Badge variant="secondary">{product.category}</Badge></td>
          </tr>
        );
      });
  }

  return <>{productsList}</>;
};

export default ProductRow;
