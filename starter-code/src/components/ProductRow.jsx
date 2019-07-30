import React, {Fragment} from 'react';

const ProductRow = ({product}) => {
  return (
    <Fragment>
      {product.stocked ? 
      <tr>
        <td className="stocked-product">{product.name}</td>
        <td className="stocked-product">{product.price}</td> 
      </tr> :
      <tr>
        <td className="outofstock-product">{product.name}</td>
        <td className="outofstock-product">{product.price}</td> 
      </tr>
      }
    </Fragment>
  );
}

export default ProductRow;