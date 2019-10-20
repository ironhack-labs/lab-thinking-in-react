import React from 'react';
import ProductRow from './ProductRow';
import '../App.css';

const ProductTable = props => {
    return(
      <table>
        <tr>
          <th><h3>NAME</h3></th>
          <th><h3>PRICE</h3></th>
        </tr>
        {props.productsList.map((elem,idx) => <ProductRow key={idx} product={elem}/>)}
      </table>
    )
}

export default ProductTable;