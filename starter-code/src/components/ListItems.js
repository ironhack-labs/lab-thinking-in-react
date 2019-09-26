import React from 'react';
import MyData from '../data.json';

const ListItems = props => {
  console.log(props.stock);
  const items = MyData.data
    .filter(word => {
      return (
        (!props.stock || word.stocked) &&
        word.name.toLowerCase().includes(props.query.toLowerCase())
      );
    })
    .map(el => {
      return (
        <tr key={el.name}>
          <td>{el.name}</td>
          <td>{el.price}</td>
        </tr>
      );
    });

  return <>{items}</>;
};

export default ListItems;
