import React from 'react';
import 'bulma/css/bulma.css';
import ProductRow from './ProductRow';

function ProductTable(props) {
  console.log(props.blah);
  return (
    <div>
      <table>
        <tr>
          <th>Name:</th>
          <th>Price:</th>
        </tr>

        {props.blah.map((item, indx) => (
          <ProductRow name={item.name} price={item.price} key={indx} />
        ))}
      </table>
    </div>
  );
}

export default ProductTable;
