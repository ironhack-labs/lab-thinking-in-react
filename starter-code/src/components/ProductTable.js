import React from 'react';
import 'bulma/css/bulma.css';
import ProductRow from './ProductRow';
import '../App.css';

function ProductTable(props) {
  return (
    <div className="App">
      <table
        className="table is-bordered is-fullwidth
"
      >
        <thead>
          <tr>
            <th>Name:</th>
            <th>Price:</th>
          </tr>
        </thead>

        <tbody>
          {props.blah.map((item, indx) => (
            <ProductRow
              stocked={item.stocked}
              name={item.name}
              price={item.price}
              key={indx}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
