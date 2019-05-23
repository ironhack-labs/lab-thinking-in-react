import React from 'react';

// Hint: In your ProductRow component most likely you will receive some props from
// parent component. props will be product object, again most likely ☺️ . This will give
// you chance to set nice if statement saying that if the product is out of stock (false),
//  the product name should appear in red.

const ProductRow = props => {
  return (
    <div>
      <tr key={props.key}>
        <th scope="row" />
        <td>{props.name} </td>
        <td>{props.price}</td>

        {/*         
        key={props.index}
                name={d.name}
                price={d.price} */}

      </tr>
    </div>
  );
};

export default ProductRow;
