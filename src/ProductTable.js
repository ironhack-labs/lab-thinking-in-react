import { findByLabelText } from '@testing-library/dom';
import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {
  const filtered = props.data.filter(
    (element) => 
      element.name.toLowerCase().includes(props.query.toLowerCase())
      && (props.inStock === true ? element.stocked === true : true)
  );


  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((element) => {
            return (
              <tr key={element.id}>
                <ProductRow data={element} />

                {/* <td>{element.name}</td>
                                <td>{element.price}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
