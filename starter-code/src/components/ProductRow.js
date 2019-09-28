import React from 'react';
const uuidv4 = require('uuid/v4'); // Generate unique key identifier for array items

const ProductRow = props => {
  // console.log(`Props from PR:`, props.checked)
  // console.log(`Products Data`, props.products.data)

  let soldOut = {
    color: 'red'
  };

  const filterProducts = props.products.data.filter(word => {
    let search = word.name.toLowerCase();
    let query = props.query.toLowerCase();

    return (
      // If either 'checked' or 'stocked' is true
      // AND search term matches query
      (!props.checked || word.stocked) && search.includes(query)
    )
  }).map(item => {
    return (
      <tr key={uuidv4()} className="product-item">
        {!item.stocked ? <td style={soldOut}>{item.name}</td>:<td>{item.name}</td>}
        <td>{item.price}</td>
      </tr>
    )
  });

  return filterProducts;
};

export default ProductRow;
