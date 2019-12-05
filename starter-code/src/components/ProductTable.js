import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) =>{
    
    return (
      <table>
        <thead>
          <tr>
            <td>
              <h3>Name</h3>
            </td>
            <td>
              <h3>Price</h3>
            </td>
          </tr>
        </thead>
        <tbody>
            <ProductRow products={props.products}/>
        </tbody>
      </table>
    );
  }

export default ProductTable;
