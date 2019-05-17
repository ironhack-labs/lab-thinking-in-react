import React from 'react';

// Hint: In your ProductRow component most likely you will receive some props from
// parent component. props will be product object, again most likely ☺️ . This will give
// you chance to set nice if statement saying that if the product is out of stock (false),
//  the product name should appear in red.

const ProductRow = props => {
  return (
    <div>
      <tr key={props.index}>
        <th scope="row" />
        <td>{props.name} {props.stocked}</td>
        <td>{props.price}</td>

      </tr>
    </div>
  );
};

export default ProductRow;
