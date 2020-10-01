import React from 'react';
import './ProductRow.css';

const ProductRow = (props) => {
  return props.storeData
    .filter((prod) =>
      prod.name
        .toLowerCase()
        .trim()
        .includes(props.searchInput.toLowerCase().trim())
    )

    .map((element, index) => {
      return (
        <tr className="row" key={element.id}>
          {element.stocked ? (
            <td className="inStock">
              <b>{element.name}</b>
            </td>
          ) : (
            <td className="outStock">
              <b>{element.name}</b>
            </td>
          )}

          <td>{element.price}</td>
        </tr>
      );
    });
};

export default ProductRow;
