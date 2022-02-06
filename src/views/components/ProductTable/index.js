import React from 'react';
import PropTypes from 'prop-types';
import ProductRow from '../ProductRow';


function ProductTable({productsData: products}) {
  //console.log("--", products)
  return (

    <table id="customers">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
          {
            products.map((product, idx) => <ProductRow  key = {idx}   {...product}/>)
          }
      </tbody>
    </table>
        
        
        

    );
};

ProductTable.propTypes = {};

export default ProductTable;
