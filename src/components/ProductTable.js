import React from 'react';
import ProductRow from './ProductRow';
import './ProductTable.css'

function ProductTable(props) {
  return (
    <div id='table'>
      <table id='tablecss'>
        <thead id='tableHeader'>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        {props.gridData.map((data, index) => <ProductRow key={index} gridData={data} />)}
      </table>
    </div>
  );
}

export default ProductTable;
