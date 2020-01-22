import React from 'react';

export default function ProductRow({ filteredData }) {
  return filteredData.map((e, i) => {
    const style = {
      color: 'black'
    };
    const { name, price, stocked } = e;
    if (!stocked) style.color = 'red';
    return (
      <tr style={style} key={i}>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    );
  });
}
